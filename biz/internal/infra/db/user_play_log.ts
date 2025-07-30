import {prisma} from "@/internal/infra/db/prisma_cli";
import {
    CreateUserPlayLogInput,
    UserPlayLogDTO,
} from "@/internal/domain/uz/entity";
import { UserPlayLogStatus } from "@/internal/domain/uz/enum";

function nowSeconds(): number {
    return Math.floor(Date.now() / 1000);
}

class UserPlayLogRepo {
    /**
     * 创建新的游戏记录
     * 当用户开始上机时调用，创建一条新的游戏记录
     * @param data 游戏记录创建数据
     * @returns 创建的游戏记录
     */
    async createPlayLog(data: CreateUserPlayLogInput): Promise<UserPlayLogDTO> {
        return prisma.user_play_logs.create({data});
    }
    /**
     * 检查用户是否正在游戏中
     * 查询用户是否有状态为"上机中"的最新游戏记录
     * @param qqNumber 用户QQ号
     * @returns 游戏记录或null
     */
    async checkIsPlaying(qqNumber: string): Promise<UserPlayLogDTO | null> {
        return prisma.user_play_logs.findFirst({
            where: {
                qq_number: qqNumber,
                status: UserPlayLogStatus.Playing, // 只查找未结束的上机记录
            },
            orderBy: {
                start_time: 'desc', // 按开始时间降序排列，最新的记录在前
            },
        });
    }

    /**
     * 检查用户是否处于暂停状态
     * 查询用户是否有状态为"暂停"的最新游戏记录
     * @param qqNumber 用户QQ号
     * @returns 游戏记录或null
     */
    async checkIsBreaking(qqNumber: string): Promise<UserPlayLogDTO | null> {
        return prisma.user_play_logs.findFirst({
            where: {
                qq_number: qqNumber,
                status: UserPlayLogStatus.Breaking, // 查找暂停状态的记录
            },
            orderBy: {
                start_time: 'desc',
            },
        });
    }

    /**
     * 暂停游戏记录
     * @param id 游戏记录ID
     */
    async pausePlayLog(id: string): Promise<UserPlayLogDTO> {
        // 只更新 break_at 为当前时间，不动 break_duration
        return prisma.user_play_logs.update({
            where: {
                id:id,
            },
            data: {
                status: UserPlayLogStatus.Breaking,
                break_at: new Date(),
                updated_at: new Date(),
            },
        });
    }

    /**
     * 恢复游戏记录
     * @param id 游戏记录ID
     * @param breakAt 暂停开始时间（Date）
     * @param breakDuration 当前累计暂停秒数
     */
    async resumePlayLog(id: string, breakAt: Date, breakDuration: number): Promise<UserPlayLogDTO> {
        const now = new Date();
        const thisPause = Math.floor((now.getTime() - breakAt.getTime()) / 1000);
        return prisma.user_play_logs.update({
            where: { id:id },
            data: {
                status: UserPlayLogStatus.Playing,
                break_at: null, // 清除暂停时间
                break_duration: breakDuration + thisPause,
                updated_at: now,
            },
        });
    }

    /**
     * 结束游戏记录
     * 当用户下机时调用，将游戏状态设置为"已结束"并记录结束时间
     * @param id 游戏记录ID
     * @returns 更新后的游戏记录
     */
    async endPlayLog(id: string): Promise<UserPlayLogDTO> {
        return prisma.user_play_logs.update({
            where: { id:id },
            data: {
                status: UserPlayLogStatus.Finished,
                end_time: new Date(),
                updated_at: new Date(),
            },
        });
    }

    /**
     * 获取用户最新的游戏记录
     * 查询用户最新的游戏记录（包括上机中和暂停状态）
     * 用于下机时获取当前游戏信息
     * @param qqNumber 用户QQ号
     * @returns 游戏记录或null
     */
    async getLatestPlayLog(qqNumber: string): Promise<UserPlayLogDTO | null> {
        return prisma.user_play_logs.findFirst({
            where: {
                qq_number: qqNumber,
                status: {
                    in: [UserPlayLogStatus.Playing, UserPlayLogStatus.Breaking]
                },
            },
            orderBy: {
                start_time: 'desc',
            },
        });
    }
}

export const userPlayLogRepo = new UserPlayLogRepo();