// biz/internal/domain/user.ts
import { users, Prisma } from '@/generated/prisma';

export type UserDTO          = users;
export type CreateUserInput  = Prisma.usersUncheckedCreateInput;
