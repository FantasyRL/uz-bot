import { CreateUserInput } from "@/internal/domain/uz/entity";
import { UserStatus } from "@/internal/domain/uz/enum";
import {userRepo} from "@/internal/infra/db/user";
import {logger} from "@/cmd/server";
import {GroupIncreaseApprove, GroupIncreaseInvite, GroupMessage, Structs} from "node-napcat-ts";
import {UzMessages} from "@/internal/domain/uz/messages";


export interface UserRegisterInput {
    userId: string;
    groupId: string;
    operator_id: string;
}

export class UzNewUserRegister{
    async register(input: UserRegisterInput): Promise<string|null> {
        const { userId, groupId, operator_id } = input;

        // 检查用户是否已经存在
        let userInfo = await userRepo.getUserByQQ(String(userId));
        if (userInfo==null) {
            // 创建新用户
            const createInput: CreateUserInput = {
                qq_number: userId,
                nick_name: userId, // 使用用户ID作为昵称
                total_time: 0,
                source:groupId,
                invited_by:operator_id,

            };

            userInfo = await userRepo.createUser(createInput);
            if (!userInfo) {
                logger.error("User not created: %s", createInput);
                return null;
            }
        }
        return UzMessages.WELCOME_MESSAGE;
    }
}