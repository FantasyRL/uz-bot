import Config from "@/config";

// 检查群组是否受支持
export function IsSupportedGroup(groupId: number | string): boolean {
    return Config.SupportGroup.some(group =>
        String(groupId) in group
    );
}

// 获取群组配置
export function GetGroupConfig(groupId: number | string) {
    const groupEntry = Config.SupportGroup.find(group =>
        String(groupId) in group
    );
    return groupEntry ? groupEntry[String(groupId)] : null;
}