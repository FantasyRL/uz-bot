import { DataSource, EntityManager } from 'typeorm';
import Config from '@/config';

/* ---------- 创建数据源 ---------- */
export const AppDataSource = new DataSource({
    type: 'postgres',
    host: Config.DB.host,
    port: Config.DB.port,
    username: Config.DB.user,
    password: Config.DB.password,
    database: Config.DB.database,
    synchronize: false,          // 生产环境请保持 false
    logging: ['error', 'warn'],  // 可配置与你的 zap 日志等级一致
    // entities: [User, ...],     // 在此注册实体
});

/* 初始化连接（放在项目入口） */
export async function initDB() {
    await AppDataSource.initialize();
    console.log('📦  Postgres connected');
}

/* ---------- 事务封装（等价 Transaction[T]） ---------- */
export async function transactional<T>(
    fn: (manager: EntityManager) => Promise<T>,
): Promise<T> {
    const queryRunner = AppDataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
        const result = await fn(queryRunner.manager);
        await queryRunner.commitTransaction();
        return result;
    } catch (err) {
        await queryRunner.rollbackTransaction();
        throw err;
    } finally {
        await queryRunner.release();
    }
}
