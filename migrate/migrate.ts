import fs from 'fs';
import path from 'path';
import { Pool } from 'pg';
import csv from 'csv-parser';
import Config from "../biz/config";

// PostgreSQL数据库连接配置（请修改）
const pool = new Pool({
    user: Config.DB.user, // 数据库用户名
    host: Config.DB.host, // 数据库主机
    database: Config.DB.database, // 数据库名称
    password: Config.DB.password, // 数据库密码
    port: Config.DB.port, // 数据库端口
});

// CSV文件路径
const csvFilePath = path.resolve(__dirname, 'yzcal.csv');

interface CsvRow {
    Id: string;
    昵称: string;
    累计游玩时长: number;
    累计消费金额: number;
    游玩次数: number;
    上机时间戳: number;
    计费倍率: number;
}

// 读取CSV并导入数据
async function migrate() {
    const client = await pool.connect();

    const rows: CsvRow[] = [];

    // 读取CSV文件
    fs.createReadStream(csvFilePath, 'utf-8')
        .pipe(csv())
        .on('data', (row) => {
            rows.push({
                Id: row['Id'],
                昵称: row['昵称'] || '',
                累计游玩时长: Math.floor(parseInt(row['累计游玩时长']) / 60), // 转分钟
                累计消费金额: parseFloat(row['累计消费金额']),
                游玩次数: parseInt(row['游玩次数']),
                上机时间戳: parseInt(row['上机时间戳']) * 1000,
                计费倍率: row['计费倍率'] ? parseFloat(row['计费倍率']) : 1.0,
            });
        })
        .on('end', async () => {
            try {
                await client.query('BEGIN');

                for (const row of rows) {
                    const lastComeTime = new Date(row.上机时间戳)
                        .toISOString()
                        .replace('T', ' ')
                        .replace('Z', '+00:00');
                    // console.log(row);
                    await client.query(
                        `
                            INSERT INTO users
                            (qq_number, nick_name, total_time, total_amount, play_count, last_come_time, discount)
                            VALUES
                                ($1, $2, $3, $4, $5, $6, $7)
                            ON CONFLICT (qq_number) DO UPDATE SET
                                                                  nick_name = EXCLUDED.nick_name,
                                                                  total_time = EXCLUDED.total_time,
                                                                  total_amount = EXCLUDED.total_amount,
                                                                  play_count = EXCLUDED.play_count,
                                                                  last_come_time = EXCLUDED.last_come_time,
                                                                  discount = EXCLUDED.discount,
                                                                  updated_at = CURRENT_TIMESTAMP;
                        `,
                        [
                            row.Id,
                            row.昵称,
                            row.累计游玩时长,
                            row.累计消费金额,
                            row.游玩次数,
                            lastComeTime,
                            row.计费倍率,
                        ]
                    );
                }

                await client.query('COMMIT');
                console.log('🎉 数据迁移成功！');
            } catch (e) {
                await client.query('ROLLBACK');
                console.error('数据迁移失败：', e);
            } finally {
                client.release();
                await pool.end();
            }
        });
}

migrate().catch((e) => console.error(e));