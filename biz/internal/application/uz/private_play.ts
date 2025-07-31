// 包场相关命令

import {BaseCommand, CommandContext} from "@/internal/application/uz/base_command";
import {userRepo} from "@/internal/infra/db/user";
import {privatePlayLogRepo} from "@/internal/infra/db/private_play";
import {UzMessages} from "@/internal/domain/uz/messages";
import { UserStatus } from "@/internal/domain/uz/enum";
import {logger} from "@/cmd/server";
import {Prisma} from "@/generated/prisma";
import Decimal = Prisma.Decimal;
import {formatDate} from "@/utils/date";

export class PrivatePlayCommand extends BaseCommand {
    getName(): string {
        return '包场';
    }

    async execute(context: CommandContext): Promise<void> {
        const { stream, args } = context;

        // 检查用户权限
        const user = await userRepo.getUserByQQ(String(stream.sender.user_id));
        if (!user || user.status !== UserStatus.Admin) {
            await this.sendReplyWithImage(stream, '❌ 权限不足，仅限管理员使用包场功能');
            return;
        }

        // 如果没有参数，显示包场信息
        if (args.length === 0) {
            await this.showPrivatePlayInfo(stream);
            return;
        }

        // 如果第一个参数是"删除"
        if (args[0] === '删除') {
            await this.deletePrivatePlay(stream, args);
            return;
        }

        // 新增：支持/uz 包场 {qq_number} 月-日 白场/晚场 price remark
        if (args.length >= 5 && args[1].match(/^\d{1,2}-\d{1,2}$/) && (args[2] === '白场' || args[2] === '晚场')) {
            const qqNumber = args[0];
            const dateStr = args[1];
            const type = args[2];
            const price = parseFloat(args[3]);
            const remark = args.slice(4).join(' ');
            const [month, day] = dateStr.split('-').map(Number);
            const now = new Date();
            const year = now.getFullYear();
            let startTime, endTime;
            if (type === '白场') {
                startTime = new Date(year, month - 1, day, 10, 0, 0, 0);
                endTime = new Date(year, month - 1, day, 16, 0, 0, 0);
            } else {
                startTime = new Date(year, month - 1, day, 16, 0, 0, 0);
                endTime = new Date(year, month - 1, day, 22, 0, 0, 0);
            }
            if (isNaN(price) || price <= 0) {
                await this.sendReply(stream, '❌ 价格必须是正数');
                return;
            }
            try {
                const hasActive = await privatePlayLogRepo.hasActivePrivatePlay(startTime, endTime);
                if (hasActive) {
                    await this.sendReply(stream, '❌ 当前已有活跃的包场，无法创建新的包场');
                    return;
                }
                const createInput = {
                    qq_number: qqNumber,
                    start_time: startTime,
                    end_time: endTime,
                    price: new Decimal(price),
                    remark: remark,
                };
                const playLog = await privatePlayLogRepo.createPrivatePlayLog(createInput);
                const startTimeFormatted = this.formatTimeForDisplay(startTime);
                const endTimeFormatted = this.formatTimeForDisplay(endTime);
                const message = `包场 (${qqNumber})开始:${startTimeFormatted}结束:${endTimeFormatted} 金额：${price} remark：${remark}`;
                await this.sendReply(stream, message);
            } catch (error) {
                logger.error('创建包场失败: %s', error);
                await this.sendReply(stream, '❌ 创建包场失败，请稍后重试');
            }
            return;
        }

        // 创建包场
        await this.createPrivatePlay(stream, args);
    }

    /**
     * 显示包场信息
     */
    private async showPrivatePlayInfo(stream: any): Promise<void> {
        try {
            const activePlays = await privatePlayLogRepo.getActivePrivatePlayLogs();
            
            if (activePlays.length === 0) {
                await this.sendReply(stream, '📋 当前没有活跃的包场记录');
                return;
            }

            let message = '📋 当前活跃的包场记录：\n';
            for (const play of activePlays) {
                const startTime = formatDate(play.start_time, true);
                const endTime = formatDate(play.end_time, true);
                message += `\n🆔 包场ID: ${play.unique_id}`;
                message += `\n👤 发起人: ${play.qq_number}`;
                message += `\n⏰ 开始时间: ${startTime}`;
                message += `\n⏰ 结束时间: ${endTime}`;
                message += `\n💰 价格: ¥${play.price}`;
                message += `\n📝 备注: ${play.remark}`;
                message += '\n';
            }

            await this.sendReply(stream, message);
        } catch (error) {
            logger.error('获取包场信息失败: %s', error);
            await this.sendReply(stream, '❌ 获取包场信息失败，请稍后重试');
        }
    }

    /**
     * 删除包场
     */
    private async deletePrivatePlay(stream: any, args: string[]): Promise<void> {
        if (args.length < 2) {
            await this.sendReply(stream, '❌ 删除包场需要指定包场ID，格式：/uz 包场 删除 {unique_id}');
            return;
        }

        const uniqueId = parseInt(args[1]);
        if (isNaN(uniqueId)) {
            await this.sendReply(stream, '❌ 包场ID必须是数字');
            return;
        }

        try {
            const playLog = await privatePlayLogRepo.getPrivatePlayLogByUniqueId(uniqueId);
            if (!playLog) {
                await this.sendReply(stream, '❌ 未找到指定的包场记录');
                return;
            }

            const deletedPlay = await privatePlayLogRepo.deletePrivatePlayLog(uniqueId);
            if (deletedPlay) {
                await this.sendReply(stream, `✅ 包场记录 ${uniqueId} 已删除`);
            } else {
                await this.sendReply(stream, '❌ 包场记录不存在或已被删除');
            }

            // TODO: 这里应该调用群名称修改逻辑
            // await this.updateGroupName(stream, '씨발');

        } catch (error) {
            logger.error('删除包场失败: %s', error);
            await this.sendReply(stream, '❌ 删除包场失败，请稍后重试');
        }
    }

    /**
     * 创建包场
     */
    private async createPrivatePlay(stream: any, args: string[]): Promise<void> {
        if (args.length < 5) {
            await this.sendReply(stream, '❌ 包场命令格式：/uz 包场 {qqNumber} {开始时间} {结束时间} {price} {remark}');
            return;
        }

        const qqNumber = args[0];
        const startTimeStr = args[1];
        const endTimeStr = args[2];
        const price = parseFloat(args[3]);
        const remark = args.slice(4).join(' ');

        if (isNaN(price) || price <= 0) {
            await this.sendReply(stream, '❌ 价格必须是正数');
            return;
        }

        // 解析时间格式：7-30-14 表示 7月30日14点
        const startTime = this.parseTimeFormat(startTimeStr);
        const endTime = this.parseTimeFormat(endTimeStr);
        
        if (!startTime || !endTime) {
            await this.sendReply(stream, '❌ 时间格式错误，请使用格式：月-日-小时，如 7-30-14');
            return;
        }

        if (startTime >= endTime) {
            await this.sendReply(stream, '❌ 开始时间必须早于结束时间');
            return;
        }

        try {
            // 检查是否有活跃的包场
            const hasActive = await privatePlayLogRepo.hasActivePrivatePlay(startTime, endTime);
            if (hasActive) {
                await this.sendReply(stream, '❌ 当前已有活跃的包场，无法创建新的包场');
                return;
            }

            // 创建包场记录
            const createInput = {
                qq_number: qqNumber,
                start_time: startTime,
                end_time: endTime,
                price: new Decimal(price),
                remark: remark,
            };

            const playLog = await privatePlayLogRepo.createPrivatePlayLog(createInput);
            
            const startTimeFormatted = this.formatTimeForDisplay(startTime);
            const endTimeFormatted = this.formatTimeForDisplay(endTime);
            
            const message = `包场 (${qqNumber})开始:${startTimeFormatted}结束:${endTimeFormatted} 金额：${price} remark：${remark}`;

            await this.sendReply(stream, message);

            // TODO: 这里应该调用群名称修改逻辑
            // await this.updateGroupName(stream, '包场中');

        } catch (error) {
            logger.error('创建包场失败: %s', error);
            await this.sendReply(stream, '❌ 创建包场失败，请稍后重试');
        }
    }

    /**
     * 解析时间格式
     * 格式：月-日-小时，如 7-30-14 表示 7月30日14点
     */
    private parseTimeFormat(timeStr: string): Date | null {
        const match = timeStr.match(/^(\d{1,2})-(\d{1,2})-(\d{1,2})$/);
        if (!match) return null;

        const month = parseInt(match[1]) - 1; // 月份从0开始
        const day = parseInt(match[2]);
        const hour = parseInt(match[3]);

        if (month < 0 || month > 11 || day < 1 || day > 31 || hour < 0 || hour > 23) {
            return null;
        }

        const currentYear = new Date().getFullYear();
        const date = new Date(currentYear, month, day, hour, 0, 0, 0);

        // 如果日期已经过去，假设是明年
        if (date < new Date()) {
            date.setFullYear(currentYear + 1);
        }

        return date;
    }

    /**
     * 格式化时间用于显示
     * 格式：MM-DD HH:00
     */
    private formatTimeForDisplay(date: Date): string {
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        const hour = date.getHours().toString().padStart(2, '0');
        return `${month}-${day} ${hour}:00`;
    }
} 