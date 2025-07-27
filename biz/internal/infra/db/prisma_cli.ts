import { PrismaClient } from '@/generated/prisma';
import Config from '@/config';

// 拼接连接串：postgresql://user:pwd@host:port/dbname
const dbUrl = `postgresql://${Config.DB.user}:${Config.DB.password}` +
    `@${Config.DB.host}:${Config.DB.port}/${Config.DB.database}`;

export const prisma = new PrismaClient({
    datasources: {
        db: {
            url: dbUrl
        },
    },
    log: ['error', 'warn'],
});

// 初始化 Prisma 客户端
export async function initPrisma() {
    try {
        await prisma.$connect();
        console.log('Prisma client connected successfully.');
    } catch (error) {
        console.error('Error connecting to Prisma client:', error);
        process.exit(1);
    }
}

// 优雅关闭
process.on('SIGINT', async () => {
    await prisma.$disconnect();
    process.exit(0);
});