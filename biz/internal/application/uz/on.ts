// 上机逻辑

import {BaseCommand, CommandContext} from "@/internal/application/uz/base_command";

export class StartGameCommand extends BaseCommand {
    getName(): string {
        return '上机';
    }

    async execute(context: CommandContext): Promise<void> {
        const { stream, args } = context;
        console.log('处理上机命令:', {
            groupId: stream.group_id,
            userId: stream.sender.user_id,
            args
        });

        const isQuick = args[0] === 'j';
        const message = isQuick
            ? '🚀 快捷上机成功！开始愉快的游戏时光吧！'
            : '🎮 上机成功！开始愉快的游戏时光吧！';

        await this.sendReply(stream, message);
    }
}