// biz/internal/domain/user.ts
import {users, Prisma, user_play_logs, private_play_logs} from '@/generated/prisma';
import { UserPlayLogStatus, PaymentOrderStatus, UserStatus } from './enum';

export type UserDTO          = users;
export type CreateUserInput  = Prisma.usersUncheckedCreateInput;

export type UserPlayLogDTO = user_play_logs;
export type CreateUserPlayLogInput = Prisma.user_play_logsUncheckedCreateInput;

export type PrivatePlayLogDTO = private_play_logs;
export type CreatePrivatePlayLogInput = Prisma.private_play_logsUncheckedCreateInput;