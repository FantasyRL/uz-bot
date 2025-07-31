// 计时功能

import {BaseCommand, CommandContext} from "@/internal/application/uz/base_command";
import {userRepo} from "@/internal/infra/db/user";
import {userPlayLogRepo} from "@/internal/infra/db/user_play_log";
import { UserPlayLogStatus } from "@/internal/domain/uz/enum";
import { GAME_STATUS_PLAYING, GAME_STATUS_PAUSED, GAME_STATUS_ERROR } from "@/internal/domain/uz/constant";
import {UzMessages} from "@/internal/domain/uz/messages";
import {logger} from "@/cmd/server";
import {formatDate, getTimeDifferenceInSeconds, formatDuration} from "@/utils/date";
import {PaymentCalculator} from "@/utils/payment_calculator";
import {Prisma} from "@/generated/prisma";
import Decimal = Prisma.Decimal;

export class TimerCommand extends BaseCommand {
    getName(): string {
        return '计时';
    }

    async execute(context: CommandContext): Promise<void> {
        const { stream } = context;

        try {
            // 获取用户信息
            const userInfo = await userRepo.getUserByQQ(String(stream.sender.user_id));
            if (!userInfo) {
                await this.sendReplyWithImage(stream, '❌ 用户信息不存在，请先上机');
                return;
            }

            // 检查用户是否在上机、暂停或桌游状态
            const currentPlayLog = await userPlayLogRepo.checkIsPlaying(String(stream.sender.user_id));
            const breakingPlayLog = await userPlayLogRepo.checkIsBreaking(String(stream.sender.user_id));
            const unoPlayLog = await userPlayLogRepo.checkIsUno(String(stream.sender.user_id));

            if (!currentPlayLog && !breakingPlayLog && !unoPlayLog) {
                await this.sendReplyWithImage(stream, '❌ 您当前没有在上机、暂停或桌游状态，无法查看计时信息');
                return;
            }

            const playLog = currentPlayLog || breakingPlayLog || unoPlayLog;
            if (!playLog) {
                await this.sendReply(stream, '❌ 获取游戏记录失败');
                return;
            }

            // 计算当前时长
            const now = new Date();
            let currentDuration: number;
            let statusText: string;

            if (playLog.status === UserPlayLogStatus.Playing) {
                // 正在游戏中
                currentDuration = getTimeDifferenceInSeconds(playLog.start_time, now);
                statusText = GAME_STATUS_PLAYING;
            } else if (playLog.status === UserPlayLogStatus.Breaking) {
                // 暂停状态
                const totalPlayTime = getTimeDifferenceInSeconds(playLog.start_time, playLog.updated_at!);
                const breakDuration = playLog.break_duration ? Number(playLog.break_duration) : 0;
                currentDuration = totalPlayTime - breakDuration;
                statusText = GAME_STATUS_PAUSED;
            } else if (playLog.status === UserPlayLogStatus.Uno) {
                // 桌游状态
                currentDuration = getTimeDifferenceInSeconds(playLog.start_time, now);
                statusText = '🃏 桌游进行中';
            } else {
                await this.sendReply(stream, GAME_STATUS_ERROR);
                return;
            }

            // 计算费用预估（支持桌游）
            const paymentResult = PaymentCalculator.calculatePaymentWithUno(
                playLog.start_time,
                now,
                userInfo.discount,
                playLog.break_duration ? Number(playLog.break_duration) : 0,
                playLog.uno_duration ? Number(playLog.uno_duration) : 0
            );

            // 格式化时间
            const startTimeFormatted = formatDate(playLog.start_time, false);
            const currentTimeFormatted = formatDate(now, false); // 当前时间不需要转换时区
            const durationFormatted = formatDuration(currentDuration);

            // 构建消息
            let message = `⏰ 计时信息 - ${stream.sender.nickname}(${stream.sender.user_id})\n\n`;
            message += `${statusText}\n`;
            message += `📅 开始时间：${startTimeFormatted}\n`;
            message += `⏰ 当前时间：${currentTimeFormatted}\n`;
            message += `⏱️ 游戏时长：${durationFormatted}\n\n`;

            if (playLog.status === UserPlayLogStatus.Breaking && playLog.break_duration) {
                const breakDurationFormatted = formatDuration(Number(playLog.break_duration));
                message += `⏸️ 累计暂停：${breakDurationFormatted}\n`;
            }

            message += `💰 费用预估：\n`;
            message += `• 基础费用：${PaymentCalculator.formatAmount(paymentResult.amount)}\n`;
            message += `• 用户折扣：${userInfo.discount.mul(100).toFixed(0)}%\n`;
            if (paymentResult.hasUnoTime) {
                message += `• 桌游费用：${PaymentCalculator.formatAmount(paymentResult.unoAmount)}\n`;
                message += `• 正常费用：${PaymentCalculator.formatAmount(paymentResult.normalAmount)}\n`;
            }
            message += `• 最终费用：${PaymentCalculator.formatAmount(paymentResult.finalAmount)}\n\n`;

            message += `💡 提示：使用 /uz 下机 结束游戏并生成订单`;

            await this.sendReply(stream, message);

        } catch (error) {
            logger.error('计时查询失败: %s', error);
            await this.sendReply(stream, '❌ 计时查询失败，请稍后重试');
        }
    }
} 