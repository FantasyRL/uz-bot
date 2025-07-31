import {BaseCommand, CommandContext} from "@/internal/application/uz/base_command";
import {UzMessages} from "@/internal/domain/uz/messages";
import {userRepo} from "@/internal/infra/db/user";
import { UserStatus } from "@/internal/domain/uz/enum";
import {logger} from "@/cmd/server";

export class HelpCommand extends BaseCommand {
    getName(): string {
        return 'help';
    }

    async execute(context: CommandContext): Promise<void> {
        const {stream} = context;

        try {
            // 获取用户信息
            const userInfo = await userRepo.getUserByQQ(String(stream.sender.user_id));
            
            // 检查是否为管理员
            const isAdmin = userInfo?.status === UserStatus.Admin;
            
            // 根据权限获取帮助信息
            const helpMessage = UzMessages.getHelpMessage(isAdmin);
            
            await this.sendReply(stream, helpMessage);
        } catch (error) {
            logger.error('获取帮助信息失败: %s', error);
            // 如果获取用户信息失败，显示基础帮助信息
            const helpMessage = UzMessages.getHelpMessage(false);
            await this.sendReply(stream, helpMessage);
        }
    }
}