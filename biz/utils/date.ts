/**
 * 时区转换工具函数
 * 将UTC+0时间转换为UTC+8时间
 */

import { UTC_OFFSET_HOURS } from '@/internal/domain/uz/constant';

/**
 * 将UTC时间转换为UTC+8时间
 * @param utcDate UTC时间
 * @returns UTC+8时间
 */
export function toUTC8(utcDate: Date): Date {
    const utc8Date = new Date(utcDate);
    utc8Date.setHours(utc8Date.getHours() + UTC_OFFSET_HOURS);
    return utc8Date;
}

/**
 * 格式化日期时间（UTC+8）
 * @param date 日期对象（UTC或UTC+8）
 * @param isUTC 是否为UTC时间，默认为true
 * @returns 格式化后的时间字符串
 */
export function formatDate(date: Date, isUTC: boolean = true): string {
    // const targetDate = isUTC ? toUTC8(date) : date;
    const targetDate=date;
    const year = targetDate.getFullYear().toString().slice(-2);
    const month = String(targetDate.getMonth() + 1).padStart(2, '0');
    const day = String(targetDate.getDate()).padStart(2, '0');
    const hour = String(targetDate.getHours()).padStart(2, '0');
    const min = String(targetDate.getMinutes()).padStart(2, '0');
    const sec = String(targetDate.getSeconds()).padStart(2, '0');
    return `${year}/${month}/${day} ${hour}:${min}:${sec}`;
}

/**
 * 格式化日期时间（仅显示日期和小时）
 * @param date 日期对象（UTC或UTC+8）
 * @param isUTC 是否为UTC时间，默认为true
 * @returns 格式化后的时间字符串 MM-DD HH:00
 */
export function formatTimeForDisplay(date: Date, isUTC: boolean = true): string {
    const targetDate = isUTC ? toUTC8(date) : date;
    const month = String(targetDate.getMonth() + 1).padStart(2, '0');
    const day = String(targetDate.getDate()).padStart(2, '0');
    const hour = String(targetDate.getHours()).padStart(2, '0');
    return `${month}-${day} ${hour}:00`;
}

/**
 * 获取当前UTC+8时间
 * @returns 当前UTC+8时间
 */
export function getCurrentUTC8Time(): Date {
    const now = new Date();
    return toUTC8(now);
}

/**
 * 计算两个时间之间的差值（秒）
 * @param startTime 开始时间
 * @param endTime 结束时间
 * @param isUTC 是否为UTC时间，默认为true
 * @returns 时间差（秒）
 */
export function getTimeDifferenceInSeconds(startTime: Date, endTime: Date, isUTC: boolean = true): number {
    const start = isUTC ? toUTC8(startTime) : startTime;
    const end = isUTC ? toUTC8(endTime) : endTime;
    return Math.floor((end.getTime() - start.getTime()) / 1000);
}

/**
 * 格式化时长（HH:MM:SS）
 * @param seconds 秒数
 * @returns 格式化后的时长字符串
 */
export function formatDuration(seconds: number): string {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}
