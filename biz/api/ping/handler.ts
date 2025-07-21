// biz/api/ping/handler.ts
import { Context } from 'openapi-backend';

export async function ping(
    _c: Context,               // openapi-backend 上下文
    _req: any,
    res: any,
) {
    res.status(200).json({ message: 'pong' });
}
