import {Prisma} from "@/generated/prisma";
import Decimal = Prisma.Decimal;
import { UTC_OFFSET_HOURS, UNO_DISCOUNT, BONUS_THRESHOLD_HOURS, BONUS_FREE_HOURS } from '@/internal/domain/uz/constant';

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
 * PaymentResultWithUno
 * ----------------------------
 * 包含桌游的价格计算结果
 */
export interface PaymentResultWithUno extends PaymentResult {
    hasUnoTime: boolean;
    unoAmount: Decimal;
    normalAmount: Decimal;
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
     * 满多少小时开始触发"满赠"活动（满 6 小时）
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
     * @param breakDuration 暂停时长（秒），默认为0
     * @returns PaymentResult  计算结果
     */
    static calculatePayment(
        startTime: Date,
        endTime: Date,
        userDiscount: Decimal,
        breakDuration: number = 0
    ): PaymentResult {
        // ---------- 1. 计算时长（秒 & 分钟，向上取整） ----------
        const totalDurationMs = endTime.getTime() - startTime.getTime();
        const totalDurationSeconds = Math.ceil(totalDurationMs / 1000);
        
        // 减去暂停时长，得到实际游戏时长
        const durationSeconds = Math.max(0, totalDurationSeconds - breakDuration);
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

    /**
     * calculatePaymentWithUno
     * 计算包含桌游时间的价格
     * @param startTime 游戏开始时间
     * @param endTime 游戏结束时间
     * @param userDiscount 用户折扣
     * @param breakDuration 暂停时长（秒）
     * @param unoDuration 桌游时长（秒）
     * @returns PaymentResultWithUno 计算结果
     */
    static calculatePaymentWithUno(
        startTime: Date,
        endTime: Date,
        userDiscount: Decimal,
        breakDuration: number = 0,
        unoDuration: number = 0
    ): PaymentResultWithUno {
        const totalDurationMs = endTime.getTime() - startTime.getTime();
        const totalDurationSeconds = Math.ceil(totalDurationMs / 1000);
        
        // 减去暂停时长，得到实际游戏时长
        const actualGameSeconds = Math.max(0, totalDurationSeconds - breakDuration);
        const actualGameMinutes = Math.ceil(actualGameSeconds / 60);
        
        // 桌游时长（分钟）
        let unoMinutes = Math.ceil(unoDuration / 60);
        
        // 正常游戏时长（分钟）
        let normalMinutes = Math.max(0, actualGameMinutes - unoMinutes);
        
        // 处理暂停时间的优先级：先扣除正常时间，再扣除桌游时间
        const breakMinutes = Math.ceil(breakDuration / 60);
        if (normalMinutes > 0 && breakMinutes > 0) {
            if (normalMinutes >= breakMinutes) {
                // 暂停时间完全从正常时间中扣除
                normalMinutes -= breakMinutes;
            } else {
                // 正常时间不够扣除，剩余暂停时间从桌游时间中扣除
                const remainingBreakMinutes = breakMinutes - normalMinutes;
                normalMinutes = 0;
                unoMinutes = Math.max(0, unoMinutes - remainingBreakMinutes);
            }
        } else if (normalMinutes === 0 && breakMinutes > 0) {
            // 只有桌游时间，暂停时间从桌游时间中扣除
            unoMinutes = Math.max(0, unoMinutes - breakMinutes);
        }
        
        // 计算满赠活动
        const totalMinutes = unoMinutes + normalMinutes;
        const bonusThresholdMinutes = BONUS_THRESHOLD_HOURS * 60; // 6小时
        const bonusFreeMinutes = BONUS_FREE_HOURS * 60; // 6小时
        
        let finalUnoPrice: Decimal;
        let finalNormalPrice: Decimal;
        
        if (totalMinutes > bonusThresholdMinutes) {
            // 计算赠送的分钟数
            const bonusMinutes = Math.min(totalMinutes - bonusThresholdMinutes, bonusFreeMinutes);
            
            // 按比例分配赠送时间
            const unoRatio = totalMinutes > 0 ? unoMinutes / totalMinutes : 0;
            const normalRatio = totalMinutes > 0 ? normalMinutes / totalMinutes : 0;
            
            const unoBonusMinutes = Math.floor(bonusMinutes * unoRatio);
            const normalBonusMinutes = Math.floor(bonusMinutes * normalRatio);
            
            // 重新计算价格
            finalUnoPrice = this.calculateUnoPrice(Math.max(0, unoMinutes - unoBonusMinutes), userDiscount.mul(UNO_DISCOUNT));
            finalNormalPrice = this.calculateNormalPrice(Math.max(0, normalMinutes - normalBonusMinutes), userDiscount);
        } else {
            // 计算桌游价格（9折）
            finalUnoPrice = this.calculateUnoPrice(unoMinutes, userDiscount.mul(UNO_DISCOUNT));
            // 计算正常游戏价格
            finalNormalPrice = this.calculateNormalPrice(normalMinutes, userDiscount);
        }
        
        const finalAmount = finalUnoPrice.plus(finalNormalPrice);
        
        return {
            amount: finalUnoPrice.plus(finalNormalPrice), // 原价
            durationSeconds: actualGameSeconds,
            durationMinutes: actualGameMinutes,
            discount: userDiscount,
            finalAmount,
            startTime,
            endTime,
            hasUnoTime: unoMinutes > 0,
            unoAmount: finalUnoPrice,
            normalAmount: finalNormalPrice,
        };
    }

    /**
     * 计算桌游价格（9折）
     */
    private static calculateUnoPrice(minutes: number, discount: Decimal): Decimal {
        if (minutes <= 0) return new Decimal(0);
        
        const totalCycles = Math.floor(minutes / this.CYCLE_DURATION_MIN);
        const remainingMinutes = minutes % this.CYCLE_DURATION_MIN;
        
        let chargeableCycles = totalCycles;
        if (remainingMinutes > this.FREE_MINUTES_IN_CYCLE) {
            chargeableCycles += 1;
        }
        
        return this.PRICE_PER_CYCLE.mul(chargeableCycles).mul(discount);
    }

    /**
     * 计算正常游戏价格
     */
    private static calculateNormalPrice(minutes: number, discount: Decimal): Decimal {
        if (minutes <= 0) return new Decimal(0);
        
        const totalCycles = Math.floor(minutes / this.CYCLE_DURATION_MIN);
        const remainingMinutes = minutes % this.CYCLE_DURATION_MIN;
        
        let chargeableCycles = totalCycles;
        if (remainingMinutes > this.FREE_MINUTES_IN_CYCLE) {
            chargeableCycles += 1;
        }
        
        return this.PRICE_PER_CYCLE.mul(chargeableCycles).mul(discount);
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
     * 日期时间格式化：yyyy-MM-dd HH:mm:ss（UTC+8）
     */
    static formatDateTime(date: Date): string {
        // 转换为UTC+8时间
        const utc8Date = new Date(date);
        // utc8Date.setHours(utc8Date.getHours() + UTC_OFFSET_HOURS);
        
        const year = utc8Date.getFullYear();
        const month = String(utc8Date.getMonth() + 1).padStart(2, '0');
        const day = String(utc8Date.getDate()).padStart(2, '0');
        const hour = String(utc8Date.getHours()).padStart(2, '0');
        const minute = String(utc8Date.getMinutes()).padStart(2, '0');
        const second = String(utc8Date.getSeconds()).padStart(2, '0');
        
        return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
    }
}
