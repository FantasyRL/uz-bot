import { Prisma } from "@/generated/prisma";
import Decimal = Prisma.Decimal;

/**
 * PaymentResult
 * ----------------------------
 * 数据结构：计算后的支付结果
 *  - amount           : 未折扣的理论应付金额（元）
 *  - durationSeconds  : 本次游戏总时长（秒，向上取整）
 *  - durationMinutes  : 本次游戏总时长（分钟，向上取整）
 *  - discount         : 用户折扣（1 表示无折扣，0.8 表示 8 折...）
 *  - finalAmount      : 折扣后的实付金额（元）
 *  - startTime / endTime : 本次游戏开始 / 结束时间
 */
export interface PaymentResult {
    amount: Decimal;
    durationSeconds: number;
    durationMinutes: number;
    discount: Decimal;
    finalAmount: Decimal;
    startTime: Date;
    endTime: Date;
}

/**
 * PaymentCalculator
 * ----------------------------
 * 提供静态方法用于：
 *  1. 根据开始/结束时间和用户折扣，计算游戏费用
 *  2. 提供金额、时长、日期的格式化工具
 */
export class PaymentCalculator {
    // --------------- 计费相关常量 ---------------
    /**
     * PRICE_PER_CYCLE
     * 一个计费周期（15 分钟）的价格，单位：元
     */
    private static readonly PRICE_PER_CYCLE = new Decimal(3);

    /**
     * CYCLE_DURATION_MIN
     * 单个计费周期的时长，单位：分钟
     */
    private static readonly CYCLE_DURATION_MIN = 15;

    /**
     * FREE_MINUTES_IN_CYCLE
     * 每个计费周期内的免费分钟数（≤2 分钟不计费，>2 分钟计一个周期）
     */
    private static readonly FREE_MINUTES_IN_CYCLE = 2;

    /**
     * BONUS_THRESHOLD_HOURS
     * 满多少小时开始触发“满赠”活动（满 6 小时）
     */
    private static readonly BONUS_THRESHOLD_HOURS = 6;

    /**
     * BONUS_FREE_HOURS
     * 触发活动后赠送的免费时长（6 小时）
     */
    private static readonly BONUS_FREE_HOURS = 6;

    // --------------- 计费核心方法 ---------------
    /**
     * calculatePayment
     * 根据开始/结束时间及折扣计算最终应付金额
     * @param startTime   游戏开始时间
     * @param endTime     游戏结束时间
     * @param userDiscount 用户折扣（1=无折扣，0.8=8折...）
     * @returns PaymentResult  计算结果
     */
    static calculatePayment(
        startTime: Date,
        endTime: Date,
        userDiscount: Decimal
    ): PaymentResult {
        // ---------- 1. 计算时长（秒 & 分钟，向上取整） ----------
        const durationMs = endTime.getTime() - startTime.getTime();
        const durationSeconds = Math.ceil(durationMs / 1000);
        const durationMinutes = Math.ceil(durationSeconds / 60);

        // ---------- 2. 计算应计费的周期数 ----------
        const totalCycles = Math.floor(
            durationMinutes / this.CYCLE_DURATION_MIN
        );
        const remainingMinutes = durationMinutes % this.CYCLE_DURATION_MIN;

        // 初步需要计费的周期数
        let chargeableCycles = totalCycles;
        // 规则：一个周期里，≤免费分钟数不收费；>免费分钟数则多计 1 个周期
        if (remainingMinutes > this.FREE_MINUTES_IN_CYCLE) {
            chargeableCycles += 1;
        }

        // ---------- 3. 计算基础金额（未考虑满赠） ----------
        const baseAmount = this.PRICE_PER_CYCLE.mul(chargeableCycles);

        // ---------- 4. 满 6 小时送 6 小时逻辑 ----------
        const bonusThresholdMinutes = this.BONUS_THRESHOLD_HOURS * 60; // 6h
        let effectiveChargeableMinutes = durationMinutes;

        if (durationMinutes > bonusThresholdMinutes) {
            // 赠送的分钟数（最多 6 小时）
            const bonusMinutes = Math.min(
                durationMinutes - bonusThresholdMinutes,
                this.BONUS_FREE_HOURS * 60
            );
            effectiveChargeableMinutes -= bonusMinutes;

            // 根据抵扣后的分钟重新计算周期 & 费用
            const effectiveCycles = Math.floor(
                effectiveChargeableMinutes / this.CYCLE_DURATION_MIN
            );
            const effectiveRemainingMinutes =
                effectiveChargeableMinutes % this.CYCLE_DURATION_MIN;

            chargeableCycles = effectiveCycles;
            if (effectiveRemainingMinutes > this.FREE_MINUTES_IN_CYCLE) {
                chargeableCycles += 1;
            }
        }

        // ---------- 5. 折扣 & 最终金额 ----------
        const finalAmount = this.PRICE_PER_CYCLE.mul(chargeableCycles);
        const discountedAmount = finalAmount.mul(userDiscount);

        // ---------- 6. 返回结果 ----------
        return {
            amount: baseAmount, // 原价
            durationSeconds,
            durationMinutes,
            discount: userDiscount,
            finalAmount: discountedAmount,
            startTime,
            endTime,
        };
    }

    // --------------- 辅助格式化函数 ---------------
    /**
     * 金额格式化（两位小数 & ¥）
     */
    static formatAmount(amount: Decimal): string {
        return `¥${amount.toFixed(2)}`;
    }

    /**
     * 时长格式化（转为 H M S，可自动省略 0）
     */
    static formatDuration(durationSeconds: number): string {
        const hours = Math.floor(durationSeconds / 3600);
        const minutes = Math.floor((durationSeconds % 3600) / 60);
        const seconds = durationSeconds % 60;

        const parts: string[] = [];
        if (hours >= 0) parts.push(`${hours}小时`);
        if (minutes >= 0) parts.push(`${minutes}分钟`);
        // 若时分都为 0，仍显示 0 秒
        if (seconds > 0 || parts.length === 0) parts.push(`${seconds}秒`);

        return parts.join('');
    }

    /**
     * 日期时间格式化：yyyy-MM-dd HH:mm:ss
     */
    static formatDateTime(date: Date): string {
        // toISOString: 2025-07-29T12:34:56.000Z
        return date.toISOString().replace('T', ' ').substring(0, 19);
    }
}
