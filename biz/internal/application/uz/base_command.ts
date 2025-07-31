// 通过 base_command 实现 selector 所需要的方法
import { GroupMessage, Structs } from 'node-napcat-ts';
import { logger } from '@/cmd/server';
import { getRandomStaticImageBuffer } from '@/utils/random_image';

export interface CommandContext {
    stream: GroupMessage;
    args: string[];
    canBreak: boolean;
    canUno: boolean;
}

export abstract class BaseCommand {
    abstract getName(): string;
    abstract execute(context: CommandContext): Promise<void>;

    protected async sendReply(stream: GroupMessage, message: string): Promise<void> {
        try {
            await stream.quick_action([
                Structs.text(message),
            ]);
        } catch (error) {
            logger.error('发送回复消息失败: %s', error);
        }
    }

    protected async sendReplyWithImage(stream: GroupMessage, message: string, imageUrl?: string|null): Promise<void> {
        try {
            let imgBuffer: Buffer | undefined;
            let filename: string | undefined;
            if (imageUrl) {
                // 允许外部传入绝对路径
                imgBuffer = require('fs').readFileSync(imageUrl);
                filename = require('path').basename(imageUrl);
            } else {
                const imgObj = getRandomStaticImageBuffer();
                if (imgObj) {
                    imgBuffer = imgObj.buffer;
                    filename = imgObj.filename;
                }
            }
            if (!imgBuffer) {
                await stream.quick_action([Structs.text(message)]);
                return;
            }
            await stream.quick_action([
                Structs.image(imgBuffer, filename),
                Structs.text(message),
            ]);
        } catch (error) {
            logger.error('发送回复消息失败: %s', error);
        }
    }

}