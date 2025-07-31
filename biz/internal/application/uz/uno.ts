import {BaseCommand, CommandContext} from "@/internal/application/uz/base_command";
import {userPlayLogRepo} from "@/internal/infra/db/user_play_log";
import {UserPlayLogStatus} from "@/internal/domain/uz/enum";
import {UzMessages} from "@/internal/domain/uz/messages";
import {logger} from "@/cmd/server";
import {formatDate, getTimeDifferenceInSeconds} from "@/utils/date";

export class UnoCommand extends BaseCommand{
    getName(): string {
        return '桌游';
    }

    async execute(context: CommandContext): Promise<void> {
        const { stream, args, canUno } = context;
        
        if (!canUno) {
            await this.sendReplyWithImage(stream, UzMessages.ERROR_UNO_NOT_ENABLED);
            return;
        }

        const qqNumber = String(stream.sender.user_id);

        try {
            // 检查是否有正在进行的游戏记录（包括暂停状态）
            let currentPlayLog = await userPlayLogRepo.getLatestPlayLog(qqNumber);
            if (currentPlayLog==null) {
                await this.sendReplyWithImage(stream, UzMessages.ERROR_NOT_PLAYING);
                return;
            }

            // 如果已经在桌游状态，不允许再次开始桌游
            if (currentPlayLog.status === UserPlayLogStatus.Uno) {
                await this.sendReplyWithImage(stream, UzMessages.ERROR_ALREADY_UNO);
                return;
            }

            // 如果处于暂停状态，先结算暂停时间
            if (currentPlayLog.status === UserPlayLogStatus.Breaking) {
                const now = new Date();
                const breakAt = currentPlayLog.break_at!;
                const breakDuration = currentPlayLog.break_duration || 0;
                const thisPauseSec = getTimeDifferenceInSeconds(breakAt, now, false);
                currentPlayLog = await userPlayLogRepo.resumePlayLog(
                    currentPlayLog.id,
                    breakAt,
                    breakDuration
                );
            }

            // 开始桌游
            await userPlayLogRepo.startUnoPlayLog(currentPlayLog.id);
            
            const unoTimeStr = formatDate(new Date(), false);
            const message = UzMessages.getUnoMessage(
                stream.sender.nickname, 
                qqNumber, 
                unoTimeStr, 
            );

            await this.sendReply(stream, message);
            
        } catch (error) {
            logger.error('开始桌游失败: %s', error);
            await this.sendReply(stream, UzMessages.ERROR_UNO_FAILED);
        }
    }
} 