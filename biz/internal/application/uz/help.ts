import {BaseCommand, CommandContext} from "@/internal/application/uz/base_command";
import {UzMessages} from "@/internal/domain/uz/messages";

export class HelpCommand extends BaseCommand {
    getName(): string {
        return '帮助';
    }

    async execute(context: CommandContext): Promise<void> {
        const {stream} = context;
        await this.sendReply(stream, UzMessages.HELP_MESSAGE);
    }
}