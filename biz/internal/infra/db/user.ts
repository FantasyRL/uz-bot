// biz/internal/infra/db/user.repo.ts

import {prisma} from "@/internal/infra/db/prisma_cli";
import {CreateUserInput, UserDTO} from "@/internal/domain/uz/user";

export class UserRepo {
    async createUser(data:CreateUserInput): Promise<UserDTO> {
        return prisma.users.create({ data });
    }
    async getUserByQQ(qqNumber: string): Promise<UserDTO | null> {
        return prisma.users.findUnique({
            where: { qq_number: qqNumber },
        });
    }
}
export const userRepo = new UserRepo();
