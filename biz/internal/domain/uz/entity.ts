// biz/internal/domain/user.ts
import {users, Prisma, user_play_logs} from '@/generated/prisma';

export type UserDTO          = users;
export type CreateUserInput  = Prisma.usersUncheckedCreateInput;

export type UserPlayLogDTO = user_play_logs;
export type CreateUserPlayLogInput = Prisma.user_play_logsUncheckedCreateInput;

export enum UserPlayLogStatus {
    NotStarted=0,
    Playing=1,
    Breaking=2,
    Finished=3,
}

export enum PaymentOrderStatus{
    Pending=0,
    SendSuccess=1,
    CheckSuccess=2,
    Failed=3,
}