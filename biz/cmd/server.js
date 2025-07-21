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
require("module-alias/register");
const express_1 = __importDefault(require("express"));
const pino_1 = __importDefault(require("pino"));
const db_1 = require("@/db");
const api_1 = require("@/api"); // 统一挂载所有模块路由
const logger = (0, pino_1.default)();
const app = (0, express_1.default)();
app.use(express_1.default.json());
// 全局路由
(0, api_1.bindRouters)(app);
// 全局错误处理中间件
app.use((err, _req, res, _next) => {
    logger.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, db_1.initDB)();
        const port = process.env.PORT || 3000;
        app.listen(port, () => logger.info(`🚀 HTTP server listening on :${port}`));
    }
    catch (err) {
        logger.error(err);
        process.exit(1);
    }
}))();
