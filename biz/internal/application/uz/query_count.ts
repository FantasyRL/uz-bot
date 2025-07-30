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
            const playingUsers = await userRepo.getCurrentPlayingUsers();
            let message = `🎮 当前在线人数为：${currentCount}\n`;
            if (playingUsers.length > 0) {
                message += `计费中的用户有：\n`;
                for (const user of playingUsers) {
                    // 计算累计时长
                    const now = new Date();
                    const durationMs = now.getTime() - user.start_time.getTime();
                    const hours = Math.floor(durationMs / 3600000);
                    const minutes = Math.floor((durationMs % 3600000) / 60000);
                    const seconds = Math.floor((durationMs % 60000) / 1000);
                    const durationStr = `${hours}:${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`;
                    message += `${user.nick_name}(${user.qq_number})：\n上机时间：${user.start_time.toLocaleString('zh-CN', {hour12: false})}\n累计时长：${durationStr}\n---\n`;
                }
            }
            await this.sendReply(stream, message);
        } catch (error) {
            logger.error('查询上机人数失败: %s', error);
            await this.sendReply(stream, '❌ 查询上机人数失败，请稍后重试');
        }
    }
} 