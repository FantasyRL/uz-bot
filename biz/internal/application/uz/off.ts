import {BaseCommand, CommandContext} from "@/internal/application/uz/base_command";
import {userPlayLogRepo} from "@/internal/infra/db/user_play_log";
import {userRepo} from "@/internal/infra/db/user";
import {paymentOrderRepo} from "@/internal/infra/db/payment_order";
import {UserPlayLogStatus, PaymentOrderStatus} from "@/internal/domain/uz/entity";
import {UzMessages} from "@/internal/domain/uz/messages";
import {PaymentCalculator} from "@/utils/payment_calculator";
import {logger} from "@/cmd/server";
import {formatDate} from "@/utils/date";
import {Prisma} from "@/generated/prisma";
import Decimal = Prisma.Decimal;

export class OffGameCommand extends BaseCommand {
    getName(): string {
        return '下机';
    }

    async execute(context: CommandContext): Promise<void> {
        const { stream, args } = context;
        const qqNumber = String(stream.sender.user_id);

        try {
            // 检查是否有正在进行的游戏记录
            const currentPlayLog = await userPlayLogRepo.getLatestPlayLog(qqNumber);
            if (!currentPlayLog) {
                await this.sendReply(stream, UzMessages.ERROR_NOT_PLAYING_OFF);
                return;
            }

            if (currentPlayLog.status === UserPlayLogStatus.Finished) {
                await this.sendReply(stream, UzMessages.ERROR_GAME_ALREADY_ENDED);
                return;
            }

            // 计算游戏时长
            const endTime = new Date();
            const startTime = currentPlayLog.start_time;
            const durationMs = endTime.getTime() - startTime.getTime();
            const durationMinutes = Math.ceil(durationMs / (1000 * 60)); // 向上取整到分钟

            // 获取用户信息
            const user = await userRepo.getUserByQQ(qqNumber);
            if (!user) {
                await this.sendReply(stream, UzMessages.ERROR_USER_INFO_MISSING);
                return;
            }

            // 计算费用
            const paymentResult = PaymentCalculator.calculatePayment(durationMinutes, user.discount);

            // 结束游戏记录
            await userPlayLogRepo.endPlayLog(currentPlayLog.id);

            // 更新用户统计信息
            await userRepo.updateUserStats(qqNumber, {
                total_time: BigInt(user.total_time + BigInt(durationMinutes)),
                total_amount: user.total_amount.plus(paymentResult.finalAmount),
                play_count: BigInt(user.play_count + BigInt(1)),
                last_come_time: endTime,
            });

            // 生成支付订单（预留接口）
            const outTradeNo = this.generateOutTradeNo();
            await paymentOrderRepo.createPaymentOrder({
                user_id: user.id,
                qq_number: qqNumber,
                out_trade_no: outTradeNo,
                channel: 1, // 默认支付渠道
                amount: paymentResult.finalAmount,
                status: PaymentOrderStatus.Pending,
            });

            // 构建消息
            const endTimeStr = formatDate(endTime);
            const startTimeStr = formatDate(startTime);
            const durationStr = PaymentCalculator.formatDuration(durationMinutes);
            const amountStr = PaymentCalculator.formatAmount(paymentResult.finalAmount);
            const discountStr = user.discount.equals(1) ? '无折扣' : `${user.discount.mul(100).toFixed(0)}折`;

            const message = UzMessages.getOffGameMessage(
                stream.sender.nickname,
                qqNumber,
                endTimeStr,
                durationStr,
                startTimeStr,
                PaymentCalculator.formatAmount(paymentResult.amount),
                discountStr,
                amountStr,
                outTradeNo
            );

            await this.sendReply(stream, message);

        } catch (error) {
            logger.error('下机失败:', error);
            await this.sendReply(stream, UzMessages.ERROR_OFF_FAILED);
        }
    }

    private generateOutTradeNo(): string {
        const timestamp = Date.now();
        const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
        return `UZ${timestamp}${random}`;
    }
} 