import 'module-alias/register';
import express from 'express';
import pino from 'pino';
import { bindRouters } from '@/api';
import Config from "@/config";
import {NapcatInstance} from '@/internal/napcat/client';
import {initPrisma} from "@/internal/infra/db/prisma_cli";

export const logger = pino();
const app = express();
app.use(express.json());

// 全局路由
bindRouters(app);

// 全局错误处理中间件
app.use((err: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
    logger.error('Global error handler: %s', err);
    res.status(500).json({ message: 'Internal Server Error' });
});

(async () => {
    try {
        // 初始化数据库
        await initPrisma();

        // 连接 Napcat
        const instance = NapcatInstance.getInstance();
        await instance.go();

        // 启动 HTTP server
        const port = Config.Server.port || 3000;
        app.listen(port, () => logger.info(`🚀 HTTP server listening on :${port}`));
    } catch (err) {
        logger.error('Server startup failed: %s', err);
        process.exit(1);
    }
})();
