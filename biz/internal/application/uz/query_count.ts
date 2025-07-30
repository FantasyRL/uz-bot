// 查询当前上机人数

import {BaseCommand, CommandContext} from "@/internal/application/uz/base_command";
import {userRepo} from "@/internal/infra/db/user";
import {UzMessages} from "@/internal/domain/uz/messages";
import {logger} from "@/cmd/server";

export class QueryCountCommand extends BaseCommand {
    getName(): string {
        return 'j';
    }

    async execute(context: CommandContext): Promise<void> {
        const { stream } = context;

        try {
            const currentCount = await userRepo.getCurrentPlayingCount();
            const message = `🎮 当前上机人数：${currentCount} 人`;
            await this.sendReply(stream, message);
        } catch (error) {
            logger.error('查询上机人数失败: %s', error);
            await this.sendReply(stream, '❌ 查询上机人数失败，请稍后重试');
        }
    }
} 