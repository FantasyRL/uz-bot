import {BaseCommand, CommandContext} from "@/internal/application/uz/base_command";
import {privatePlayLogRepo} from "@/internal/infra/db/private_play";
import {UzMessages} from "@/internal/domain/uz/messages";
import {logger} from "@/cmd/server";
import {formatDate} from "@/utils/date";
import { PRIVATE_PLAY_STATUS_ACTIVE, PRIVATE_PLAY_STATUS_PENDING, PRIVATE_PLAY_STATUS_ENDED } from "@/internal/domain/uz/constant";

export class QueryPrivatePlayCommand extends BaseCommand {
    getName(): string {
        return '查询包场';
    }

    async execute(context: CommandContext): Promise<void> {
        const { stream } = context;

        try {
            // 获取所有未结束的包场记录
            const plays = await privatePlayLogRepo.getActivePrivatePlayLogs();
            if (!plays || plays.length === 0) {
                await this.sendReply(stream, '📋 当前没有未结束的包场安排');
                return;
            }
            let message = '📋 当前未结束的包场信息：\n';
            const now = new Date();
            for (const play of plays) {
                const startTime = formatDate(play.start_time, true);
                const endTime = formatDate(play.end_time, true);
                message += `🆔 包场ID: ${play.unique_id}\n`;
                message += `👤 发起人: ${play.qq_number}\n`;
                message += `⏰ 开始时间: ${startTime}\n`;
                message += `⏰ 结束时间: ${endTime}\n`;
                message += `💰 价格: ¥${play.price}\n`;
                message += `📝 备注: ${play.remark}\n`;
                // 判断包场状态
                if (now >= play.start_time && now <= play.end_time) {
                    message += `\n${PRIVATE_PLAY_STATUS_ACTIVE}`;
                } else if (now < play.start_time) {
                    message += `\n${PRIVATE_PLAY_STATUS_PENDING}`;
                } else {
                    message += `\n${PRIVATE_PLAY_STATUS_ENDED}`;
                }
                message += '\n---\n';
            }
            message += `\n💡 提示：包场当日全天享受85折优惠！`;
            await this.sendReply(stream, message);
        } catch (error) {
            logger.error('查询包场信息失败: %s', error);
            await this.sendReply(stream, '❌ 查询包场信息失败，请稍后重试');
        }
    }
} 