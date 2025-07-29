// 上机逻辑

import {BaseCommand, CommandContext} from "@/internal/application/uz/base_command";
import {userRepo} from "@/internal/infra/db/user";
import {
    CreateUserInput,
    CreateUserPlayLogInput,
    UserDTO,
    UserPlayLogDTO,
    UserPlayLogStatus
} from "@/internal/domain/uz/entity";
import {UzMessages} from "@/internal/domain/uz/messages";
import {Prisma} from "@/generated/prisma";
import Decimal = Prisma.Decimal;
import {logger} from "@/cmd/server";
import {userPlayLogRepo} from "@/internal/infra/db/user_play_log";
import {formatDate} from "@/utils/date";

export class StartGameCommand extends BaseCommand {
    getName(): string {
        return '上机';
    }

    async execute(context: CommandContext): Promise<void> {
        const { stream, args } = context;

        // 获取用户信息
        let userInfo:UserDTO| null = null;
        try{
            userInfo= await userRepo.getUserByQQ(String(stream.sender.user_id));
            if (userInfo==null){
                // 进入注册流程
                const createInput:CreateUserInput= {
                    qq_number: String(stream.sender.user_id),
                    nick_name: String(stream.sender.nickname),
                    source: String(stream.group_id),
                    total_time: BigInt(0),
                    total_amount: new Decimal(0),
                    play_count: BigInt(0),
                }
                userInfo=await userRepo.createUser(createInput);
            }
        }catch (error) {
            await this.sendReply(stream, UzMessages.ERROR_USER_INFO_FAILED);
            logger.error('Error fetching or creating user:', error);
            return;
        }
        // 检查是否已经在上机
        let playLogInfo: UserPlayLogDTO|null=null
        try{
            playLogInfo = await userPlayLogRepo.checkIsPlaying(String(stream.sender.user_id));
        }catch (error) {
            await this.sendReply(stream, UzMessages.ERROR_PLAY_STATUS_CHECK);
            logger.error('Error checking play log:', error);
            return;
        }
        if(playLogInfo!=null){
            await this.sendReply(stream, UzMessages.ERROR_ALREADY_PLAYING);
            return;
        }

        // 检查是否有暂停的游戏记录
        let breakingPlayLog: UserPlayLogDTO|null=null;
        try {
            breakingPlayLog = await userPlayLogRepo.checkIsBreaking(String(stream.sender.user_id));
        } catch (error) {
            await this.sendReply(stream, UzMessages.ERROR_PAUSE_STATUS_CHECK);
            logger.error('Error checking breaking play log:', error);
            return;
        }

        if (breakingPlayLog!=null) {
            // 恢复暂停的游戏
            try {
                const now = new Date();
                const breakAt = breakingPlayLog.updated_at;
                const breakDuration = breakingPlayLog.break_duration;
                if (breakAt==null) {
                    await this.sendReply(stream, UzMessages.ERROR_PAUSE_RECORD_ABNORMAL);
                    return;
                }
                const thisPauseSec = Math.floor((now.getTime() - breakAt.getTime()) / 1000);
                // 格式化为 HH:MM:SS
                const h = Math.floor(thisPauseSec / 3600);
                const m = Math.floor((thisPauseSec % 3600) / 60);
                const s = thisPauseSec % 60;
                const currentPauseDuration = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
                await userPlayLogRepo.resumePlayLog(breakingPlayLog.id, breakAt, breakDuration);
                const resumeTimeStr = formatDate(now);
                const message = UzMessages.getResumeMessage(
                    stream.sender.nickname,
                    String(stream.sender.user_id),
                    resumeTimeStr,
                    currentPauseDuration
                );
                await this.sendReply(stream, message);
                return;
            } catch (error) {
                console.error('恢复游戏失败:', error);
                logger.error('恢复游戏失败:', error);
                await this.sendReply(stream, UzMessages.ERROR_RESUME_FAILED);
                return;
            }
        }
        // 创建上机记录
        const createPlayLogInput:CreateUserPlayLogInput= {
            qq_number: String(stream.sender.user_id),
            status: UserPlayLogStatus.Playing,
        }
        playLogInfo=await userPlayLogRepo.createPlayLog(createPlayLogInput);

        const startTimeStr = formatDate(playLogInfo.start_time);

        const message = UzMessages.getStartGameMessage(
            stream.sender.nickname, 
            String(stream.sender.user_id), 
            startTimeStr
        );

        await this.sendReply(stream, message);
    }
}