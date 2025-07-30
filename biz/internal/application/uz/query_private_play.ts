import {BaseCommand, CommandContext} from "@/internal/application/uz/base_command";
import {privatePlayLogRepo} from "@/internal/infra/db/private_play";
import {UzMessages} from "@/internal/domain/uz/messages";
import {logger} from "@/cmd/server";
import {formatDate} from "@/utils/date";

export class QueryPrivatePlayCommand extends BaseCommand {
    getName(): string {
        return '查询包场';
    }

    async execute(context: CommandContext): Promise<void> {
        const { stream } = context;

        try {
            // 获取当天的包场记录
            const todayPlay = await privatePlayLogRepo.getTodayPrivatePlay();
            
            if (!todayPlay) {
                await this.sendReply(stream, '📋 今天没有包场安排');
                return;
            }

                                   const startTime = formatDate(todayPlay.start_time, true);
                       const endTime = formatDate(todayPlay.end_time, true);
            
            let message = '📋 今日包场信息：\n';
            message += `👤 发起人: ${todayPlay.qq_number}\n`;
            message += `⏰ 开始时间: ${startTime}\n`;
            message += `⏰ 结束时间: ${endTime}\n`;
            message += `💰 价格: ¥${todayPlay.price}\n`;
            message += `📝 备注: ${todayPlay.remark}\n`;
            
            // 判断包场状态
            const now = new Date();
            if (now >= todayPlay.start_time && now <= todayPlay.end_time) {
                message += `\n🔴 状态: 包场进行中（无法上机）`;
            } else if (now < todayPlay.start_time) {
                message += `\n🟡 状态: 包场未开始`;
            } else {
                message += `\n🟢 状态: 包场已结束`;
            }
            
            message += `\n\n💡 提示：包场当日全天享受85折优惠！`;

            await this.sendReply(stream, message);
        } catch (error) {
            logger.error('查询包场信息失败: %s', error);
            await this.sendReply(stream, '❌ 查询包场信息失败，请稍后重试');
        }
    }
} 