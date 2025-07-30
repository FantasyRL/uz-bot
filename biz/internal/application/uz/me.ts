import { BaseCommand, CommandContext } from "@/internal/application/uz/base_command";
import { userRepo } from "@/internal/infra/db/user";
import { UserStatus } from "@/internal/domain/uz/enum";
import { formatDate } from "@/utils/date";
import { logger } from "@/cmd/server";

function getRoleName(status: number): string {
    switch (status) {
        case UserStatus.Admin: return "管理员";
        case UserStatus.Normal: return "用户";
        case UserStatus.WeeklyCard: return "周卡";
        case UserStatus.SmallMonthCard: return "小月卡";
        case UserStatus.LargeMonthCard: return "大月卡";
        case UserStatus.VIP: return "金主";
        case UserStatus.Rest: return "可休息";
        case UserStatus.Disabled: return "禁用";
        default: return `未知(${status})`;
    }
}

export class MeCommand extends BaseCommand {
    getName(): string {
        return 'me';
    }

    async execute(context: CommandContext): Promise<void> {
        const { stream } = context;
        try {
            const userInfo = await userRepo.getUserByQQ(String(stream.sender.user_id));
            if (!userInfo) {
                await this.sendReply(stream, '❌ 未找到您的用户信息，请先上机注册。');
                return;
            }
            let role = getRoleName(userInfo.status);
            if (userInfo.role!='用户'){
                role=userInfo.role;
            }
            const lastTime = userInfo.last_come_time ? formatDate(userInfo.last_come_time, false) : '无';
            const playCount = userInfo.play_count ?? 0;
            const totalTime = userInfo.total_time ?? 0;

            const message = 
`用户：${userInfo.nick_name}(${userInfo.qq_number})
角色：${role}
上次游玩时间：
${lastTime}
游玩次数：
${playCount}
累计游玩时间：
${totalTime}分钟`;

            await this.sendReply(stream, message);
        } catch (error) {
            logger.error('查询个人信息失败: %s', error);
            await this.sendReply(stream, '❌ 查询个人信息失败，请稍后重试');
        }
    }
}