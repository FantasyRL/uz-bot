// biz/internal/infra/db/user.repo.ts

import {prisma} from "@/internal/infra/db/prisma_cli";
import {CreateUserInput, UserDTO} from "@/internal/domain/uz/entity";
import {Prisma} from "@/generated/prisma";

interface UpdateUserStatsInput {
    total_time: bigint;
    total_amount: Prisma.Decimal;
    play_count: bigint;
    last_come_time: Date;
}

class UserRepo {
    /**
     * 创建新用户
     * 当用户首次使用机器人时自动创建用户记录
     * @param data 用户创建数据
     * @returns 创建的用户信息
     */
    async createUser(data:CreateUserInput): Promise<UserDTO> {
        return prisma.users.create({ data });
    }
    
    /**
     * 根据QQ号获取用户信息
     * 用于验证用户身份和获取用户折扣等信息
     * @param qqNumber 用户QQ号
     * @returns 用户信息或null
     */
    async getUserByQQ(qqNumber: string): Promise<UserDTO | null> {
        return prisma.users.findUnique({
            where: { qq_number: qqNumber },
        });
    }

    /**
     * 更新用户统计信息
     * 当用户下机时更新累计游戏时长、消费金额、游戏次数等统计信息
     * @param qqNumber 用户QQ号
     * @param data 更新的统计数据
     * @returns 更新后的用户信息
     */
    async updateUserStats(qqNumber: string, data: UpdateUserStatsInput): Promise<UserDTO> {
        return prisma.users.update({
            where: { qq_number: qqNumber },
            data: {
                total_time: data.total_time,
                total_amount: data.total_amount,
                play_count: data.play_count,
                last_come_time: data.last_come_time,
                updated_at: new Date(),
            },
        });
    }

    async updateUserNickName(qqNumber: string, nickName: string): Promise<UserDTO> {
        return prisma.users.update({
            where: { qq_number: qqNumber },
            data: { nick_name: nickName, updated_at: new Date() },
        });
    }

    /**
     * 获取当前上机人数
     * @returns 当前上机人数
     */
    async getCurrentPlayingCount(): Promise<number> {
        const count = await prisma.user_play_logs.count({
            where: {
                status: 1, // Playing状态
            },
        });
        return count;
    }
}
export const userRepo = new UserRepo();
