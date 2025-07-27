import {MessageType, Receive} from "node-napcat-ts";
import {logger} from "@/cmd/server";


// 从消息中提取文本消息
export function ExtractTextMessages(messageType: Receive[keyof Receive][]): string[] {
    const texts: string[] = [];

    for (const msg of messageType) {
        if (msg.type === 'text') {
            // 在这个代码块中，TypeScript 知道 msg 是文本消息类型
            // 6666还有这种检查的
            texts.push(msg.data.text);
        }
    }

    return texts;
}