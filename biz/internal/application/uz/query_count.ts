// 查询当前上机人数

import {BaseCommand, CommandContext} from "@/internal/application/uz/base_command";
import {userRepo} from "@/internal/infra/db/user";
import {userPlayLogRepo} from "@/internal/infra/db/user_play_log";
import { UserPlayLogStatus } from "@/internal/domain/uz/enum";
import {UzMessages} from "@/internal/domain/uz/messages";
import {logger} from "@/cmd/server";
import {formatDate, getTimeDifferenceInSeconds, formatDuration} from "@/utils/date";

export class QueryCountCommand extends BaseCommand {
    getName(): string {
        return 'j';
    }

    async execute(context: CommandContext): Promise<void> {
        const { stream } = context;

        try {
            // 获取所有正在游戏中的用户（包括上机、暂停、桌游状态）
            const allPlayingUsers = await userPlayLogRepo.getAllCurrentPlayingUsers();
            
            // 分类用户
            const playingUsers = allPlayingUsers.filter(user => user.status === UserPlayLogStatus.Playing);
            const unoUsers = allPlayingUsers.filter(user => 
                user.status === UserPlayLogStatus.Uno || user.status === UserPlayLogStatus.Breaking
            );
            
            const totalCount = allPlayingUsers.length;
            const playingCount = playingUsers.length;
            const unoCount = unoUsers.length;
            
            let message = `🎮 当前在线人数为：${totalCount}\n`;
            message += `📊 状态分布：上机中 ${playingCount} 人，桌游中 ${unoCount} 人\n\n`;
            
            // 显示上机中的用户
            if (playingUsers.length > 0) {
                message += `🟢 上机中的用户：\n`;
                for (const user of playingUsers) {
                    const userInfo = await userRepo.getUserByQQ(user.qq_number);
                    const nickName = userInfo?.nick_name || user.qq_number;
                    
                    // 计算累计时长
                    const now = new Date();
                    const durationSeconds = getTimeDifferenceInSeconds(user.start_time, now, false);
                    const durationStr = formatDuration(durationSeconds);
                    const startTimeStr = formatDate(user.start_time, false);
                    
                    message += `${nickName}(${user.qq_number})：\n`;
                    message += `上机时间：${startTimeStr}\n`;
                    message += `累计时长：${durationStr}\n`;
                    message += `---\n`;
                }
                message += `\n`;
            }
            
            // 显示桌游/暂停中的用户
            if (unoUsers.length > 0) {
                message += `🃏 桌游中的用户：\n`;
                for (const user of unoUsers) {
                    const userInfo = await userRepo.getUserByQQ(user.qq_number);
                    const nickName = userInfo?.nick_name || user.qq_number;
                    
                    // 计算累计时长
                    const now = new Date();
                    const durationSeconds = getTimeDifferenceInSeconds(user.start_time, now, false);
                    const durationStr = formatDuration(durationSeconds);
                    const startTimeStr = formatDate(user.start_time, false);
                    
                    // 确定状态文本
                    let statusText = '';
                    let statusTime = '';
                    if (user.status === UserPlayLogStatus.Uno) {
                        statusText = '桌游中';
                        statusTime = user.uno_at ? formatDate(user.uno_at, false) : '';
                    } else if (user.status === UserPlayLogStatus.Breaking) {
                        statusText = '桌游中';
                        statusTime = user.break_at ? formatDate(user.break_at, false) : '';
                    }
                    
                    message += `${nickName}(${user.qq_number})：\n`;
                    message += `上机时间：${startTimeStr}\n`;
                    message += `累计时长：${durationStr}\n`;
                    message += `当前状态：${statusText}`;
                    if (statusTime) {
                        message += ` (${statusTime})`;
                    }
                    message += `\n---\n`;
                }
            }
            
            await this.sendReply(stream, message);
        } catch (error) {
            logger.error('查询上机人数失败: %s', error);
            await this.sendReply(stream, '❌ 查询上机人数失败，请稍后重试');
        }
    }
} 