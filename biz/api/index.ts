import { OpenAPIBackend } from 'openapi-backend';
import { Request as OBRequest } from 'openapi-backend';
import { Express } from 'express';
import path from 'path';
import * as PingHandler from './ping/handler';

export function bindRouters(app: Express) {
    const api = new OpenAPIBackend({
        definition: path.resolve(__dirname, '../../docs/idl/ping.yaml'),
        strict: true,
    });

    api.register({
        /** operationId 对应 */
        ping: PingHandler.ping,

        // 通用钩子
        validationFail: (c, _req, res) =>
            res.status(400).json({ err: c.validation.errors }),
        notFound: (_c, _req, res) => res.status(404).json({ err: 'Not found' }),
    });

    api.init(); // 解析 spec

    // Express 适配：把所有请求交给 api 处理
    app.use('/api/v1', (req, res) => api.handleRequest(req as unknown as OBRequest, req, res));
}
