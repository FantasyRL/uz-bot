import {Prisma} from "@/generated/prisma";
import Decimal = Prisma.Decimal;

export interface PaymentResult {
    amount: Decimal;
    duration: number; // 分钟
    discount: Decimal;
    finalAmount: Decimal;
}

export class PaymentCalculator {
    private static readonly PRICE_PER_15MIN = 3; // 3元/15分钟
    private static readonly FREE_HOURS_THRESHOLD = 6; // 满6小时送6小时
    private static readonly FREE_HOURS_BONUS = 6; // 送的6小时

    /**
     * 计算支付金额
     * @param durationMinutes 游戏时长（分钟）
     * @param userDiscount 用户折扣
     * @returns 支付结果
     */
    static calculatePayment(durationMinutes: number, userDiscount: Decimal): PaymentResult {
        // 基础计费：3元/15分钟
        const baseAmount = new Decimal(this.PRICE_PER_15MIN * (durationMinutes / 15));
        
        // 满6小时送6小时的活动
        let finalAmount = baseAmount;
        if (durationMinutes >= this.FREE_HOURS_THRESHOLD * 60) {
            // 如果超过6小时，减去送的6小时费用
            const freeHoursAmount = new Decimal(this.PRICE_PER_15MIN * (this.FREE_HOURS_BONUS * 60 / 15));
            finalAmount = baseAmount.minus(freeHoursAmount);
            if (finalAmount.lessThan(0)) {
                finalAmount = new Decimal(0);
            }
        }

        // 应用用户折扣
        const discountedAmount = finalAmount.mul(userDiscount);

        return {
            amount: baseAmount,
            duration: durationMinutes,
            discount: userDiscount,
            finalAmount: discountedAmount,
        };
    }

    /**
     * 格式化金额显示
     * @param amount 金额
     * @returns 格式化后的金额字符串
     */
    static formatAmount(amount: Decimal): string {
        return `¥${amount.toFixed(2)}`;
    }

    /**
     * 格式化时长显示
     * @param minutes 分钟数
     * @returns 格式化后的时长字符串
     */
    static formatDuration(minutes: number): string {
        const hours = Math.floor(minutes / 60);
        const remainingMinutes = minutes % 60;
        
        if (hours > 0) {
            return `${hours}小时${remainingMinutes > 0 ? remainingMinutes + '分钟' : ''}`;
        } else {
            return `${remainingMinutes}分钟`;
        }
    }
} 