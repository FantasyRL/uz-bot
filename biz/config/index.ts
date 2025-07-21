import fs from 'fs';
import path from 'path';
import { load as loadYaml } from 'js-yaml';
import { z } from 'zod';
import * as process from "node:process";

/* ---------- 配置 Schema ---------- */

const DatabaseSchema = z.object({
    host: z.string(),
    port: z.number(),
    database: z.string(),
    user: z.string(),
    password: z.string(),
});

const ConfigSchema = z.object({
    database: DatabaseSchema,
});

export type DatabaseConfig = z.infer<typeof DatabaseSchema>;

export type AppConfig = z.infer<typeof ConfigSchema>;

const DEFAULT_CONFIG_NAME = 'config.yaml';
function detectConfigPath(): string {
    // 1. 优先：环境变量
    if (process.env.CONFIG_FILE) return path.resolve(process.env.CONFIG_FILE);

    // 2. 其次：项目根 /config.yaml（现在已经有）
    const rootPath = path.resolve(process.cwd(), DEFAULT_CONFIG_NAME);
    if (fs.existsSync(rootPath)) return rootPath;

    // 3. 最后：源码同级目录 /biz/config/config.yaml
    return path.resolve(__dirname, DEFAULT_CONFIG_NAME);
}

const configFilePath = detectConfigPath();


class Config {
    private static instance: AppConfig;

    /** 强制加载配置 */
    public static load() {
        if (this.instance) return;
        const raw = fs.readFileSync(configFilePath, 'utf-8');
        const cfg = ConfigSchema.parse(loadYaml(raw));
        this.instance = cfg;
    }

    /** Getter，类似 Go 中 config.DB */
    public static get DB(): DatabaseConfig {
        if (!this.instance) this.load();
        return this.instance.database;
    }
}

export default Config;
