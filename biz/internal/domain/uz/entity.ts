// biz/internal/domain/user.ts
import {users, Prisma, user_play_logs, private_play_logs} from '@/generated/prisma';

export type UserDTO          = users;
export type CreateUserInput  = Prisma.usersUncheckedCreateInput;

export type UserPlayLogDTO = user_play_logs;
export type CreateUserPlayLogInput = Prisma.user_play_logsUncheckedCreateInput;

export type PrivatePlayLogDTO = private_play_logs;
export type CreatePrivatePlayLogInput = Prisma.private_play_logsUncheckedCreateInput;

export enum UserPlayLogStatus {
    NotStarted=0,
    Playing=1,
    Breaking=2,
    Finished=3,
}

export enum PaymentOrderStatus{
    Pending=0,
    SendSuccess=1,
    CheckSuccess=2,
    Failed=3,
}

// 用户状态枚举
export enum UserStatus {
    Normal = 1,        // 正常
    Disabled = 0,      // 禁用
    Admin = 896,       // 管理
    WeeklyCard = 2,    // 周卡
    SmallMonthCard = 3, // 小月卡
    LargeMonthCard = 4, // 大月卡
    VIP = 573,         // 金主
    Rest = 5,          // 可休息
}

// 包场相关常量
export const PRIVATE_PLAY_DISCOUNT = 0.85; // 包场期间全场85折
export const PRIVATE_PLAY_DAY_START_HOUR = 10; // 包场日分界小时（10点）
export const PRIVATE_PLAY_DAY_DURATION_HOURS = 24; // 包场日跨度小时（10点到次日10点）

// 时区相关常量
export const UTC_OFFSET_HOURS = 8; // UTC+8时区偏移
export const TIMEZONE_UTC_PLUS_8 = 'UTC+8';

// 时间格式化相关常量
export const TIME_FORMAT_MM_DD_HH = 'MM-DD HH:00'; // 时间显示格式
export const TIME_FORMAT_YY_MM_DD_HH_MM_SS = 'YY/MM/DD HH:MM:SS'; // 完整时间格式

// 游戏状态相关常量
export const GAME_STATUS_PLAYING = '🟢 游戏进行中';
export const GAME_STATUS_PAUSED = '🟡 游戏已暂停';
export const GAME_STATUS_ERROR = '❌ 游戏状态异常';

// 包场状态相关常量
export const PRIVATE_PLAY_STATUS_ACTIVE = '🔴 状态: 包场进行中（无法上机）';
export const PRIVATE_PLAY_STATUS_PENDING = '🟡 状态: 包场未开始';
export const PRIVATE_PLAY_STATUS_ENDED = '🟢 状态: 包场已结束';

// 错误消息相关常量
export const ERROR_MESSAGE_PREFIX = '❌ ';
export const SUCCESS_MESSAGE_PREFIX = '✅ ';
export const INFO_MESSAGE_PREFIX = '📋 ';

// 支付相关常量
export const PAYMENT_CHANNEL_DEFAULT = 1; // 默认支付渠道
export const ORDER_PREFIX = 'UZ'; // 订单号前缀

// 数据库相关常量
export const DEFAULT_BREAK_DURATION = 0; // 默认暂停时长
export const DEFAULT_TOTAL_TIME = 0; // 默认总时长
export const DEFAULT_TOTAL_AMOUNT = 0; // 默认总金额
export const DEFAULT_PLAY_COUNT = 0; // 默认游戏次数

// 用户折扣相关常量
export const NO_DISCOUNT_TEXT = '无折扣';
export const DISCOUNT_SUFFIX = '折';
export const PRIVATE_PLAY_DISCOUNT_TEXT = ' (包场当日全天85折)';