/**
 * UZ机器人消息常量
 */
export class UzMessages {
    // 通用消息
    static readonly ERROR_GENERAL = '❌ 操作失败，请稍后重试！';
    static readonly ERROR_DB_OPERATION = '❌ 数据库操作失败，请稍后重试！';
    static readonly SUCCESS_OPERATION = '✅ 操作成功！';

    // 上机相关消息
    static readonly ERROR_USER_INFO_FAILED = '❌ 获取用户信息失败，请稍后再试！';
    static readonly ERROR_PLAY_STATUS_CHECK = '❌ 上机状态检查失败，请稍后再试！';
    static readonly ERROR_PAUSE_STATUS_CHECK = '❌ 暂停状态检查失败，请稍后再试！';
    static readonly ERROR_ALREADY_PLAYING = '❌ 您已经在上机中。';
    static readonly ERROR_PAUSE_RECORD_ABNORMAL = '❌ 暂停记录异常，请稍后重试！';
    static readonly ERROR_RESUME_FAILED = '❌ 恢复游戏失败，请稍后重试！';
    static readonly ERROR_USER_INFO_MISSING = '❌ 用户信息获取失败！';

    // 暂停相关消息
    static readonly ERROR_PAUSE_NOT_ENABLED = '❌ 暂停功能未启用，请联系管理员！';
    static readonly ERROR_PAUSE_REASON_REQUIRED = '❌ 暂停命令需要备注原因，如 /uz 暂停 饭呢';
    static readonly ERROR_NOT_PLAYING = '❌ 您当前没有在上机中，无法暂停！';
    static readonly ERROR_ALREADY_PAUSED = '❌ 您已经在暂停状态中，请先恢复游戏！';
    static readonly ERROR_PAUSE_FAILED = '❌ 暂停失败，请稍后重试！';
    static readonly SUCCESS_PAUSE = '✅ 游戏已暂停，可以多次暂停！';

    // 下机相关消息
    static readonly ERROR_NOT_PLAYING_OFF = '❌ 您当前没有在上机中，无法下机！';
    static readonly ERROR_GAME_ALREADY_ENDED = '❌ 您的游戏已经结束！';
    static readonly ERROR_OFF_FAILED = '❌ 下机失败，请稍后重试！';

    // 帮助消息
    static readonly HELP_MESSAGE = `🎮 UZ游戏机器人使用指南

📋 可用命令:
• /uz 上机 - 开始游戏，如果之前暂停会自动恢复
• /uz 暂停 [原因] - 暂停游戏，需要说明暂停原因（可多次暂停）
• /uz 下机 - 结束游戏并计算费用
• /uz help - 显示此帮助信息

💰 计费规则:
• 基础价格：3元/15分钟
• 满6小时送6小时活动
• 用户折扣：根据用户自动应用
• 暂停时间不计入计费时长(但是没开，哈哈)

📝 使用示例:
• /uz 上机
• /uz 暂停 吃饭
• /uz 下机

💡 提示：您可以多次暂停游戏，每次暂停都会累计暂停时长，但暂停时间不计入计费。

如有问题请联系管理员！`;

    /**
     * 生成上机成功消息
     */
    static getStartGameMessage(nickname: string, userId: string, startTime: string): string {
        return `用户${nickname}(${userId})：
上机计费开始，当前时间为${startTime}`;
    }

    /**
     * 生成暂停成功消息
     */
    static getPauseMessage(nickname: string, qqNumber: string, pauseTime: string, reason: string): string {
        return `用户${nickname}(${qqNumber})：
游戏已暂停，暂停时间：${pauseTime}
暂停原因：${reason}
请使用 /uz 上机 来恢复游戏。
💡 提示：您可以多次暂停，每次暂停都会累计暂停时长。`;
    }

    /**
     * 生成恢复游戏消息
     */
    static getResumeMessage(nickname: string, userId: string, resumeTime: string, pauseDuration: string): string {
        return `用户${nickname}(${userId})：
游戏已恢复，恢复时间：${resumeTime}
暂停时长：${pauseDuration}
继续享受游戏吧！`;
    }

    /**
     * 生成下机消息
     */
    static getOffGameMessage(
        nickname: string, 
        qqNumber: string, 
        endTime: string, 
        duration: string, 
        startTime: string, 
        baseAmount: string, 
        discount: string, 
        finalAmount: string, 
        outTradeNo: string
    ): string {
        return `用户${nickname}(${qqNumber})：
游戏结束，下机时间：${endTime}
游戏时长：${duration}
开始时间：${startTime}
基础费用：${baseAmount}
用户折扣：${discount}
最终费用：${finalAmount}
订单号：${outTradeNo}
`;
    }
} 