import fs from 'fs';
import path from 'path';
import { load as loadYaml } from 'js-yaml';
import { z } from 'zod';
import * as process from "node:process";
import {DatabaseSchema, NapcatSchema, ServerSchema,SupportGroupSchema} from './type'
/* ---------- 配置 Schema ---------- */



const ConfigSchema = z.object({
    database: DatabaseSchema,
    napcat: NapcatSchema,
    server: ServerSchema,
    support_group: SupportGroupSchema,
});

export type DatabaseConfig = z.infer<typeof DatabaseSchema>;
export type NapcatConfig = z.infer<typeof NapcatSchema>;
export type ServerConfig = z.infer<typeof ServerSchema>;
export type SupportGroupConfig = z.infer<typeof SupportGroupSchema>;
export type AppConfig = z.infer<typeof ConfigSchema>;

const DEFAULT_CONFIG_NAME = 'config.yaml';
function detectConfigPath(): string {
    // 1. 优先 环境变量
    if (process.env.CONFIG_FILE) return path.resolve(process.env.CONFIG_FILE);

    // 2. 退避 源码同级目录 /biz/config/config.yaml
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

    // 把配置export到全局
    public static get DB(): DatabaseConfig {
        if (!this.instance) this.load();
        return this.instance.database;
    }
    public static get Napcat(): NapcatConfig {
        if (!this.instance) this.load();
        return this.instance.napcat;
    }
    public static get Server(): ServerConfig {
        if (!this.instance) this.load();
        return this.instance.server;
    }
    public static get SupportGroup(): SupportGroupConfig {
        if (!this.instance) this.load();
        return this.instance.support_group;
    }
}

export default Config;
