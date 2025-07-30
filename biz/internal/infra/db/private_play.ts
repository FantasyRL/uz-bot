import {prisma} from "@/internal/infra/db/prisma_cli";
import {Prisma} from "@/generated/prisma";
import {logger} from "@/cmd/server";

export type PrivatePlayLogDTO = Prisma.private_play_logsGetPayload<{}>;
export type CreatePrivatePlayLogInput = Prisma.private_play_logsUncheckedCreateInput;

class PrivatePlayLogRepo {
    /**
     * 创建新的包场记录
     * @param data 包场记录创建数据
     * @returns 创建的包场记录
     */
    async createPrivatePlayLog(data: CreatePrivatePlayLogInput): Promise<PrivatePlayLogDTO> {
        return prisma.private_play_logs.create({data});
    }

    /**
     * 根据唯一ID获取包场记录
     * @param uniqueId 唯一ID
     * @returns 包场记录或null
     */
    async getPrivatePlayLogByUniqueId(uniqueId: number): Promise<PrivatePlayLogDTO | null> {
        return prisma.private_play_logs.findFirst({
            where: { unique_id: uniqueId },
        });
    }

    /**
     * 删除包场记录
     * @param uniqueId 唯一ID
     * @returns 删除的记录或null（如果记录不存在）
     */
    async deletePrivatePlayLog(uniqueId: number): Promise<PrivatePlayLogDTO | null> {
        try {
            return await prisma.private_play_logs.delete({
                where: { unique_id: uniqueId },
            });
        } catch (error) {
            // 如果是记录不存在的错误，返回null
            if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025') {
                return null;
            }
            throw error;
        }
    }

    /**
     * 获取最近的包场记录
     * @returns 最近的包场记录或null
     */
    async getLatestPrivatePlayLog(): Promise<PrivatePlayLogDTO | null> {
        return prisma.private_play_logs.findFirst({
            where: {
                end_time: {
                    gt: new Date(), // 结束时间大于当前时间，即未结束
                },
            },
            orderBy: {
                start_time: 'desc',
            },
        });
    }

    /**
     * 获取指定日期范围内的包场记录
     * @param startDate 开始日期
     * @param endDate 结束日期
     * @returns 包场记录列表
     */
    async getPrivatePlayLogsByDateRange(startDate: Date, endDate: Date): Promise<PrivatePlayLogDTO[]> {
        return prisma.private_play_logs.findMany({
            where: {
                start_time: {
                    gte: startDate,
                    lte: endDate,
                },
            },
            orderBy: {
                start_time: 'asc',
            },
        });
    }

    /**
     * 获取所有活跃的包场记录（未结束的）
     * @returns 活跃的包场记录列表
     */
    async getActivePrivatePlayLogs(): Promise<PrivatePlayLogDTO[]> {
        return prisma.private_play_logs.findMany({
            where: {
                end_time: {
                    gt: new Date(), // 结束时间大于当前时间，即未结束
                },
            },
            orderBy: {
                start_time: 'asc',
            },
        });
    }

    /**
     * 获取所有包场记录（分页）
     * @param page 页码（从1开始）
     * @param pageSize 每页大小
     * @returns 包场记录列表
     */
    async getAllPrivatePlayLogs(page: number = 1, pageSize: number = 10): Promise<PrivatePlayLogDTO[]> {
        const skip = (page - 1) * pageSize;
        return prisma.private_play_logs.findMany({
            orderBy: {
                start_time: 'desc',
            },
            skip,
            take: pageSize,
        });
    }

    /**
     * 根据QQ号获取包场记录
     * @param qqNumber QQ号
     * @returns 包场记录列表
     */
    async getPrivatePlayLogsByQQ(qqNumber: string): Promise<PrivatePlayLogDTO[]> {
        return prisma.private_play_logs.findMany({
            where: {
                qq_number: qqNumber,
            },
            orderBy: {
                start_time: 'desc',
            },
        });
    }

    /**
     * 检查是否有活跃的包场（懒加载方式）
     * @returns 是否有活跃的包场
     */
    async hasActivePrivatePlay(): Promise<boolean> {
        const count = await prisma.private_play_logs.count({
            where: {
                end_time: {
                    gt: new Date(), // 结束时间大于当前时间，即未结束
                },
            },
        });
        return count > 0;
    }

    /**
     * 获取当天的包场记录（以10点为分界）
     * @returns 当天的包场记录或null
     */
    async getTodayPrivatePlay(): Promise<PrivatePlayLogDTO | null> {
        const now = new Date();
        const todayStart = new Date(now);
        todayStart.setHours(10, 0, 0, 0);
        
        const todayEnd = new Date(todayStart);
        todayEnd.setDate(todayEnd.getDate() + 1);
        todayEnd.setHours(10, 0, 0, 0);

        return prisma.private_play_logs.findFirst({
            where: {
                start_time: {
                    gte: todayStart,
                    lt: todayEnd,
                },
            },
            orderBy: {
                start_time: 'desc',
            },
        });
    }
}

export const privatePlayLogRepo = new PrivatePlayLogRepo(); 