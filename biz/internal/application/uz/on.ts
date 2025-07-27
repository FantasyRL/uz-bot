// 上机逻辑

import {BaseCommand, CommandContext} from "@/internal/application/uz/base_command";
import {userRepo} from "@/internal/infra/db/user";
import {CreateUserInput, UserDTO} from "@/internal/domain/uz/user";
import {Prisma} from "@/generated/prisma";
import Decimal = Prisma.Decimal;
import {logger} from "@/cmd/server";

export class StartGameCommand extends BaseCommand {
    getName(): string {
        return '上机';
    }

    async execute(context: CommandContext): Promise<void> {
        const { stream, args } = context;

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
            await this.sendReply(stream, '❌ 上机失败，请稍后再试！');
            console.error('Error fetching or creating user:', error);
            return;
        }

        const isQuick = args[0] === 'j';
        const message = isQuick
            ? '🚀 快捷上机成功！开始愉快的游戏时光吧！'
            : '🎮 上机成功！开始愉快的游戏时光吧！';

        await this.sendReply(stream, message);
    }
}