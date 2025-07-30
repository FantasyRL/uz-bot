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