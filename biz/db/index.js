"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
exports.initDB = initDB;
exports.transactional = transactional;
const typeorm_1 = require("typeorm");
const config_1 = __importDefault(require("@/config"));
/* ---------- 创建数据源 ---------- */
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: config_1.default.DB.host,
    port: config_1.default.DB.port,
    username: config_1.default.DB.user,
    password: config_1.default.DB.password,
    database: config_1.default.DB.database,
    synchronize: false, // 生产环境请保持 false
    logging: ['error', 'warn'], // 可配置与你的 zap 日志等级一致
    // entities: [User, ...],     // 在此注册实体
});
/* 初始化连接（放在项目入口） */
function initDB() {
    return __awaiter(this, void 0, void 0, function* () {
        yield exports.AppDataSource.initialize();
        console.log('📦  Postgres connected');
    });
}
/* ---------- 事务封装（等价 Transaction[T]） ---------- */
function transactional(fn) {
    return __awaiter(this, void 0, void 0, function* () {
        const queryRunner = exports.AppDataSource.createQueryRunner();
        yield queryRunner.connect();
        yield queryRunner.startTransaction();
        try {
            const result = yield fn(queryRunner.manager);
            yield queryRunner.commitTransaction();
            return result;
        }
        catch (err) {
            yield queryRunner.rollbackTransaction();
            throw err;
        }
        finally {
            yield queryRunner.release();
        }
    });
}
