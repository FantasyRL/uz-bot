import 'module-alias/register';
import express from 'express';
import pino from 'pino';
import Config from '@/config';
import { initDB } from '@/db';
import { bindRouters } from '@/api';   // 统一挂载所有模块路由

const logger = pino();
const app = express();
app.use(express.json());

// 全局路由
bindRouters(app);

// 全局错误处理中间件
app.use((err: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
    logger.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
});

(async () => {
    try {
        await initDB();
        const port = process.env.PORT || 3000;
        app.listen(port, () => logger.info(`🚀 HTTP server listening on :${port}`));
    } catch (err) {
        logger.error(err);
        process.exit(1);
    }
})();
