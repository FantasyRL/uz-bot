import WebSocket from 'ws';
import Config from '@/config';
import {NCWebsocket, Structs} from 'node-napcat-ts'
import {GetGroupConfig} from "@/utils/check_group";
import {ExtractTextMessages} from "@/utils/msg";
import {UzCommandSelector} from "@/internal/application/uz/selector";
import {logger} from "@/cmd/server";
import {UserRegisterInput, UzNewUserRegister} from "@/internal/application/uz/register";

export class NapcatInstance {
    private static instance: NapcatInstance;
    private napcat: NCWebsocket;
    // uz 命令选择器
    private commandSelector: UzCommandSelector;
    // 处理新用户
    private newUserProcesser: UzNewUserRegister;
    // 去重
    private lastProcessedMessage: {
        messageId: number;
    } | null = null;
    private lastProcessedNoticeUserId: {
        userId: number;
    }| null = null;

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
        this.newUserProcesser = new UzNewUserRegister();
    }

    public static getInstance(): NapcatInstance {
        if (!NapcatInstance.instance) {
            NapcatInstance.instance = new NapcatInstance();
        }
        return NapcatInstance.instance;
    }

    public async go() {
        this.napcat.on('message', async (stream) => {
            if(stream.message_type==="group"){
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
                    await this.commandSelector.execute(stream, firstMsg, groupConfig.break, groupConfig.uno);
                }
            }
        });
        this.napcat.on('notice',async(stream)=>{
            if(stream.notice_type==='group_increase'){
                // 去重
                if(this.lastProcessedNoticeUserId?.userId === stream.user_id){
                    return;
                }
                this.lastProcessedNoticeUserId={
                    userId: stream.user_id,
                }
                // 检查是否是支持的群组
                const groupConfig=GetGroupConfig(stream.group_id);
                if (groupConfig==null){
                    return;
                }
                let registerInput:UserRegisterInput = {
                    userId: stream.user_id.toString(),
                    groupId: stream.group_id.toString(),
                    operator_id: stream.operator_id.toString()||'',
                }
                let msg=await this.newUserProcesser.register(registerInput);
                if(msg){
                    await this.napcat.send_group_msg({
                        group_id: stream.group_id,
                        message: [
                            Structs.text(msg),
                        ]
                    })
                }
            }
        })

        await this.napcat.connect();
        console.log('Napcat WebSocket connected.');
    }
}
