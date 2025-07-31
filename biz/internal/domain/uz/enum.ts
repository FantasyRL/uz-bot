// UZ相关枚举类型

export enum UserPlayLogStatus {
    NotStarted = 0,
    Playing = 1,
    Breaking = 2,
    Finished = 3,
    Uno = 4,        // 桌游状态
}

export enum PaymentOrderStatus {
    Pending = 0,
    SendSuccess = 1,
    CheckSuccess = 2,
    Failed = 3,
}

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