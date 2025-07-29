import {operationLogRepo} from "@/internal/infra/db/operation_log";
import {userRepo} from "@/internal/infra/db/user";
import {GroupMessage} from "node-napcat-ts";

export class OperationLogger {
    static async logOperation(stream: GroupMessage, operation: string, canBreak: boolean): Promise<void> {
        try {
            // 获取用户信息
            const user = await userRepo.getUserByQQ(String(stream.sender.user_id));
            if (!user) {
                return; // 用户不存在，不记录日志
            }

            // 记录操作日志
            await operationLogRepo.createOperationLog({
                user_id: user.id,
                qq_number: String(stream.sender.user_id),
                operation: operation,
            });
        } catch (error) {
            console.error('记录操作日志失败:', error);
        }
    }
} 