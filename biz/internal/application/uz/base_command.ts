// 通过 base_command 实现 selector 所需要的方法
import {GroupMessage, Structs} from "node-napcat-ts";
import {logger} from "@/cmd/server";

export interface CommandContext {
    stream: GroupMessage;
    args: string[];
}

export abstract class BaseCommand {
    abstract getName(): string;
    abstract execute(context: CommandContext): Promise<void>;

    protected async sendReply(stream: GroupMessage, message: string): Promise<void> {
        try {
            await stream.quick_action([
                Structs.text(message),
            ]);
        } catch (error) {
            logger.error('发送回复消息失败:', error);
        }
    }
}