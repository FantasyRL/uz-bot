import {BaseCommand, CommandContext} from "@/internal/application/uz/base_command";
import {userPlayLogRepo} from "@/internal/infra/db/user_play_log";
import {userRepo} from "@/internal/infra/db/user";
import {paymentOrderRepo} from "@/internal/infra/db/payment_order";
import {privatePlayLogRepo} from "@/internal/infra/db/private_play";
import {UserPlayLogStatus, PaymentOrderStatus, PRIVATE_PLAY_DISCOUNT} from "@/internal/domain/uz/entity";
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
        const { stream } = context;
        const qqNumber = String(stream.sender.user_id);

        try {
            const currentPlayLog = await userPlayLogRepo.getLatestPlayLog(qqNumber);
            if (!currentPlayLog) {
                await this.sendReply(stream, UzMessages.ERROR_NOT_PLAYING_OFF);
                return;
            }

            if (currentPlayLog.status === UserPlayLogStatus.Finished) {
                await this.sendReply(stream, UzMessages.ERROR_GAME_ALREADY_ENDED);
                return;
            }

            const endTime = new Date();
            const startTime = currentPlayLog.start_time;

            const user = await userRepo.getUserByQQ(qqNumber);
            if (!user) {
                await this.sendReply(stream, UzMessages.ERROR_USER_INFO_MISSING);
                return;
            }

            // 检查是否有当天的包场记录，并判断是否在包场当日
            let effectiveDiscount = user.discount;
            let isPrivatePlayActive = false;
            
            try {
                const todayPlay = await privatePlayLogRepo.getTodayPrivatePlay();
                if (todayPlay) {
                    const playDate = new Date(todayPlay.start_time);
                    
                    // 判断当前时间是否在包场当日（10点到次日10点）
                    const now = new Date();
                    const playDayStart = new Date(playDate);
                    playDayStart.setHours(10, 0, 0, 0);
                    
                    const playDayEnd = new Date(playDate);
                    playDayEnd.setDate(playDayEnd.getDate() + 1);
                    playDayEnd.setHours(10, 0, 0, 0);
                    
                    if (now >= playDayStart && now < playDayEnd) {
                        isPrivatePlayActive = true;
                        // 包场当日全天85折
                        effectiveDiscount = effectiveDiscount.mul(PRIVATE_PLAY_DISCOUNT);
                    }
                }
            } catch (error) {
                logger.error('检查包场状态失败: %s', error);
                // 如果检查包场状态失败，继续使用用户原有折扣
            }

            const paymentResult = PaymentCalculator.calculatePayment(
                startTime,
                endTime,
                effectiveDiscount,
                currentPlayLog.break_duration || 0
            );

            await userPlayLogRepo.endPlayLog(currentPlayLog.id);

            await userRepo.updateUserStats(qqNumber, {
                total_time: BigInt(user.total_time + BigInt(paymentResult.durationMinutes)),
                total_amount: user.total_amount.plus(paymentResult.finalAmount),
                play_count: BigInt(user.play_count + BigInt(1)),
                last_come_time: endTime,
            });

            const outTradeNo = this.generateOutTradeNo();
            await paymentOrderRepo.createPaymentOrder({
                user_id: user.id,
                qq_number: qqNumber,
                out_trade_no: outTradeNo,
                channel: 1,
                amount: paymentResult.finalAmount,
                status: PaymentOrderStatus.Pending,
            });

            // 构建折扣信息
            let discountInfo = user.discount.equals(1) ? '无折扣' : `${user.discount.mul(100).toFixed(0)}折`;
            if (isPrivatePlayActive) {
                discountInfo += ` (包场当日全天85折)`;
            }

            const message = UzMessages.getOffGameMessage(
                stream.sender.nickname,
                qqNumber,
                PaymentCalculator.formatDateTime(paymentResult.endTime),
                PaymentCalculator.formatDuration(paymentResult.durationSeconds),
                PaymentCalculator.formatDateTime(paymentResult.startTime),
                PaymentCalculator.formatAmount(paymentResult.amount),
                discountInfo,
                PaymentCalculator.formatAmount(paymentResult.finalAmount),
                outTradeNo
            );

            await this.sendReply(stream, message);

        } catch (error) {
            logger.error('下机失败: %s', error);
            await this.sendReply(stream, UzMessages.ERROR_OFF_FAILED);
        }
    }

    private generateOutTradeNo(): string {
        const timestamp = Date.now();
        const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
        return `UZ${timestamp}${random}`;
    }
} 