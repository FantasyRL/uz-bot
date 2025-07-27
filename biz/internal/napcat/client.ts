import WebSocket from 'ws';
import Config from '@/config';
import {NCWebsocket, Structs} from 'node-napcat-ts'
import {GetGroupConfig} from "@/utils/check_group";
import {ExtractTextMessages} from "@/utils/msg";
import {UzCommandSelector} from "@/internal/application/uz/selector";
import {logger} from "@/cmd/server";

export class NapcatInstance {
    private static instance: NapcatInstance;
    private napcat: NCWebsocket;
    // uz 命令选择器
    private commandSelector: UzCommandSelector;
    // 去重
    private lastProcessedMessage: {
        messageId: number;
    } | null = null;

    private constructor() {
        this.napcat = new NCWebsocket({
            protocol: 'ws',
            host: Config.Napcat.host,
            port: Config.Napcat.port,
            accessToken: Config.Napcat.token,
            throwPromise: true,
            reconnection: {
                enable: true,
                attempts: 10,
                delay: 5000,
            },
        }, Config.Napcat.debug);
        this.commandSelector = new UzCommandSelector();
    }

    public static getInstance(): NapcatInstance {
        if (!NapcatInstance.instance) {
            NapcatInstance.instance = new NapcatInstance();
        }
        return NapcatInstance.instance;
    }

    public async go() {
        this.napcat.on('message', async (stream) => {
            if(stream.message_type==="group"&& stream.sender.user_id===1845983502){
                // 去重
                if (this.lastProcessedMessage?.messageId === stream.message_id) {
                    return;
                }
                this.lastProcessedMessage={
                    messageId: stream.message_id,
                }

                // 检查是否是支持的群组
                const groupConfig=GetGroupConfig(stream.group_id);
                if (groupConfig==null){
                    return;
                }
                const msgs=ExtractTextMessages(stream.message)
                if(msgs.length==0){
                    return;
                }

                // 检查是否是 /uz 开头的命令
                const firstMsg = msgs[0].trimStart();
                if (firstMsg.startsWith('/uz')) {
                    await this.commandSelector.execute(stream, firstMsg);
                }
            }
        });

        await this.napcat.connect();
        console.log('Napcat WebSocket connected.');
    }
}
