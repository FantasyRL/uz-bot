import {BaseCommand, CommandContext} from "@/internal/application/uz/base_command";
import {userPlayLogRepo} from "@/internal/infra/db/user_play_log";
import {UserPlayLogStatus} from "@/internal/domain/uz/entity";
import {UzMessages} from "@/internal/domain/uz/messages";
import {logger} from "@/cmd/server";
import {formatDate} from "@/utils/date";

export class BreakCommand extends BaseCommand{
    getName(): string {
        return '暂停';
    }

    async execute(context: CommandContext): Promise<void> {
        const { stream, args, canBreak } = context;
        
        if (!canBreak) {
            await this.sendReply(stream, UzMessages.ERROR_PAUSE_NOT_ENABLED);
            return;
        }
        
        if (args.length == 0) {
            await this.sendReply(stream, UzMessages.ERROR_PAUSE_REASON_REQUIRED);
            return;
        }

        const reason = args.join(' ');
        const qqNumber = String(stream.sender.user_id);

        try {
            // 检查是否有正在进行的游戏记录（包括暂停状态）
            const currentPlayLog = await userPlayLogRepo.getLatestPlayLog(qqNumber);
            if (currentPlayLog==null) {
                await this.sendReply(stream, UzMessages.ERROR_NOT_PLAYING);
                return;
            }

            // 如果已经在暂停状态，不允许再次暂停
            if (currentPlayLog.status === UserPlayLogStatus.Breaking) {
                await this.sendReply(stream, UzMessages.ERROR_ALREADY_PAUSED);
                return;
            }

            // 暂停游戏
            await userPlayLogRepo.pausePlayLog(currentPlayLog.id);
            
            const pauseTimeStr = formatDate(new Date());
            const message = UzMessages.getPauseMessage(
                stream.sender.nickname, 
                qqNumber, 
                pauseTimeStr, 
                reason
            );

            await this.sendReply(stream, message);
            
        } catch (error) {
            logger.error('暂停游戏失败:', error);
            await this.sendReply(stream, UzMessages.ERROR_PAUSE_FAILED);
        }
    }
}