import {BaseCommand} from "@/internal/application/uz/base_command";

export class HelpCommand extends BaseCommand {
    getName(): string {
        return '帮助';
    }

    async execute(context: { stream: any; args: string[] }): Promise<void> {
        const {stream} = context;
        const helpMessage = '可用命令:\n' +
            '• /uz 上机\n' +
            '• /uz 结账 [支付方式]\n' +
            '• /uz 开通套餐 [套餐类型]\n' +
            '• /uzj (快捷上机)\n' +
            '• /uz 帮助';
        await this.sendReply(stream, helpMessage);
    }
}