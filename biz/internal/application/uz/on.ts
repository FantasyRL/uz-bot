// 上机逻辑

import {BaseCommand, CommandContext} from "@/internal/application/uz/base_command";
import {userRepo} from "@/internal/infra/db/user";
import {
    CreateUserInput,
    CreateUserPlayLogInput,
    UserDTO,
    UserPlayLogDTO,
    UserPlayLogStatus,
    PRIVATE_PLAY_DISCOUNT,
    DEFAULT_TOTAL_TIME,
    DEFAULT_TOTAL_AMOUNT,
    DEFAULT_PLAY_COUNT
} from "@/internal/domain/uz/entity";
import {UzMessages} from "@/internal/domain/uz/messages";
import {Prisma} from "@/generated/prisma";
import Decimal = Prisma.Decimal;
import {logger} from "@/cmd/server";
import {userPlayLogRepo} from "@/internal/infra/db/user_play_log";
import {privatePlayLogRepo} from "@/internal/infra/db/private_play";
import {formatDate, getTimeDifferenceInSeconds, formatDuration} from "@/utils/date";

export class StartGameCommand extends BaseCommand {
    getName(): string {
        return '上机';
    }

    async execute(context: CommandContext): Promise<void> {
        const { stream, args } = context;

        // 检查是否有当天的包场记录，并判断是否在包场时间段内
        try {
            const todayPlay = await privatePlayLogRepo.getTodayPrivatePlay();
            if (todayPlay) {
                const now = new Date();
                
                // 判断当前时间是否在包场时间段内
                if (now >= todayPlay.start_time && now <= todayPlay.end_time) {
                    await this.sendReplyWithImage(stream, '❌ 当前处于包场时间段内，无法上机');
                    return;
                }
            }
        } catch (error) {
            logger.error('检查包场状态失败: %s', error);
            await this.sendReply(stream, '❌ 检查包场状态失败，请稍后重试');
            return;
        }

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
                    total_time: BigInt(DEFAULT_TOTAL_TIME),
                    total_amount: new Decimal(DEFAULT_TOTAL_AMOUNT),
                    play_count: BigInt(DEFAULT_PLAY_COUNT),
                }
                userInfo=await userRepo.createUser(createInput);
            }else{
                // 更新nickname 虽然没啥用
                userInfo=await userRepo.updateUserNickName(stream.sender.user_id.toString(),stream.sender.nickname);
            }
        }catch (error) {
            await this.sendReply(stream, UzMessages.ERROR_USER_INFO_FAILED);
            logger.error('Error fetching or creating user: %s', error);
            return;
        }
        // 检查是否已经在上机
        let playLogInfo: UserPlayLogDTO|null=null
        try{
            playLogInfo = await userPlayLogRepo.checkIsPlaying(String(stream.sender.user_id));
        }catch (error) {
            await this.sendReply(stream, UzMessages.ERROR_PLAY_STATUS_CHECK);
            logger.error('Error checking play log: %s', error);
            return;
        }
        if(playLogInfo!=null){
            await this.sendReplyWithImage(stream, UzMessages.ERROR_ALREADY_PLAYING);
            return;
        }

        // 检查是否有暂停的游戏记录
        let breakingPlayLog: UserPlayLogDTO|null=null;
        try {
            breakingPlayLog = await userPlayLogRepo.checkIsBreaking(String(stream.sender.user_id));
        } catch (error) {
            await this.sendReply(stream, UzMessages.ERROR_PAUSE_STATUS_CHECK);
            logger.error('Error checking breaking play log: %s', error);
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
                const thisPauseSec = getTimeDifferenceInSeconds(breakAt, now, false);
                const currentPauseDuration = formatDuration(thisPauseSec);
                await userPlayLogRepo.resumePlayLog(breakingPlayLog.id, breakAt, breakDuration);
                const resumeTimeStr = formatDate(now, false);
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
                logger.error('恢复游戏失败: %s', error);
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

        const startTimeStr = formatDate(playLogInfo.start_time, false);

        const message = UzMessages.getStartGameMessage(
            stream.sender.nickname, 
            String(stream.sender.user_id), 
            startTimeStr
        );

        await this.sendReply(stream, message);
    }
}