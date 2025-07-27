// biz/api/ping/handler.ts
import { Context } from 'openapi-backend';
import {PingApplication} from '@/internal/application/ping/ping'

export async function ping(
    _c: Context,               // openapi-backend 上下文
    _req: any,
    res: any,
) {
    let msg: string;
    msg=PingApplication.Ping();
    res.status(200).json({ message: msg });
}
