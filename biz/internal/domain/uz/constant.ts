// UZ相关常量

// 包场相关
export const PRIVATE_PLAY_DISCOUNT = 0.85;
export const PRIVATE_PLAY_DAY_START_HOUR = 10;
export const PRIVATE_PLAY_DAY_DURATION_HOURS = 24;

// 时区相关
export const UTC_OFFSET_HOURS = 8;
export const TIMEZONE_UTC_PLUS_8 = 'UTC+8';

// 时间格式
export const TIME_FORMAT_MM_DD_HH = 'MM-DD HH:00';
export const TIME_FORMAT_YY_MM_DD_HH_MM_SS = 'YY/MM/DD HH:MM:SS';

// 游戏状态
export const GAME_STATUS_PLAYING = '🟢 游戏进行中';
export const GAME_STATUS_PAUSED = '🟡 游戏已暂停';
export const GAME_STATUS_ERROR = '❌ 游戏状态异常';

// 包场状态
export const PRIVATE_PLAY_STATUS_ACTIVE = '🔴 状态: 包场进行中（无法上机）';
export const PRIVATE_PLAY_STATUS_PENDING = '🟡 状态: 包场未开始';
export const PRIVATE_PLAY_STATUS_ENDED = '🟢 状态: 包场已结束';

// 错误消息前缀
export const ERROR_MESSAGE_PREFIX = '❌ ';
export const SUCCESS_MESSAGE_PREFIX = '✅ ';
export const INFO_MESSAGE_PREFIX = '📋 ';

// 支付相关
export const PAYMENT_CHANNEL_DEFAULT = 1;
export const ORDER_PREFIX = 'UZ';

// 数据库相关
export const DEFAULT_BREAK_DURATION = 0;
export const DEFAULT_TOTAL_TIME = 0;
export const DEFAULT_TOTAL_AMOUNT = 0;
export const DEFAULT_PLAY_COUNT = 0;

// 用户折扣相关
export const NO_DISCOUNT_TEXT = '无折扣';
export const DISCOUNT_SUFFIX = '折';
export const PRIVATE_PLAY_DISCOUNT_TEXT = ' (包场当日全天85折)';