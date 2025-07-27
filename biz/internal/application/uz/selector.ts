// selector.ts
import {GroupMessage, Structs} from 'node-napcat-ts';
import {StartGameCommand} from "@/internal/application/uz/on";
import {logger} from "@/cmd/server";
import {BaseCommand, CommandContext} from "@/internal/application/uz/base_command";
import {HelpCommand} from "@/internal/application/uz/help";

export interface CommandHandler {
    (stream: any, args: string[]): Promise<void>;
}

export class UzCommandSelector {
    private handlers: Map<string, BaseCommand> = new Map();

    constructor() {
        this.registerDefaultHandlers();
    }

    // 注册命令处理器
    public register(command: string, handler: BaseCommand): void {
        this.handlers.set(command, handler);
    }
    private registerDefaultHandlers(): void {
        // /uzj 查询人数
        // this.register('j', new StartGameCommand());

        // /uz 上机
        this.register('上机', new StartGameCommand());

        // /uz 结账


        // /uz 开通套餐


        // /uz 帮助
        this.register('help', new HelpCommand());
    }

    // 解析并执行命令
    public async execute(stream: any, commandText: string): Promise<void> {
        // 移除前缀 /uz 并分割命令和参数
        const cleanText = commandText.replace(/^\/uz\s*/i, '').trim();
        const parts = cleanText.split(/\s+/);
        const command = parts[0]?.toLowerCase() || '';
        const args = parts.slice(1);
        const context: CommandContext = { stream, args };
        const undefinedCommand='help';

        logger.info(`解析命令: ${command}, 参数: [${args.join(', ')}]`);

        // 查找对应的处理器
        const handler = this.handlers.get(command);
        if (handler) {
            try {
                await handler.execute(context);
            } catch (error) {
                logger.error(`执行命令 ${command} 时出错:`, error);
                await this.sendReply(stream, '❌ 命令执行出错，请稍后重试');
            }
        } else {
            await this.handlers.get(undefinedCommand)?.execute(context);
        }
    }
    // 发送回复消息
    private async sendReply(stream: GroupMessage, message: string): Promise<void> {
        try {
            await stream.quick_action([
                Structs.text(message)
            ]);
        } catch (error) {
            logger.error('发送回复消息时出错:', error);
        }
    }

}

