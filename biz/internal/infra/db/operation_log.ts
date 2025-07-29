import {prisma} from "@/internal/infra/db/prisma_cli";
import {Prisma} from "@/generated/prisma";

export type CreateOperationLogInput = Prisma.operation_logsUncheckedCreateInput;

class OperationLogRepo {
    /**
     * 创建操作日志记录
     * 记录用户的所有命令操作，用于审计和问题排查
     * @param data 操作日志创建数据
     * @returns 创建的操作日志记录
     */
    async createOperationLog(data: CreateOperationLogInput) {
        return prisma.operation_logs.create({data});
    }
}

export const operationLogRepo = new OperationLogRepo(); 