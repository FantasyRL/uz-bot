# UZ Bot 功能说明

## 新增功能

### 1. 操作日志记录
- 所有通过群验证的 `/uz xxx xxx` 命令都会自动记录到 `operation_logs` 表
- 记录内容包括：用户ID、QQ号、操作命令、时间戳

### 2. 暂停功能
- 用户可以使用 `/uz 暂停 [原因]` 暂停游戏
- 支持多次暂停，每次暂停都会累计暂停时长
- 暂停状态存储在 `user_play_logs` 表的 `break_at` 字段
- 累计暂停时长存储在 `break_duration` 字段
- 暂停状态通过 `/uz 上机` 命令来解除，自动计算当前暂停时长
- 暂停时间不计入计费时长
- 暂停时间限制：最大5小时（根据数据库表结构）

### 3. 下机计费功能
- 用户可以使用 `/uz 下机` 结束游戏并计算费用
- 计费规则：
  - 基础价格：3元/15分钟
  - 满6小时送6小时活动
  - 应用用户折扣
- 自动生成支付订单，预留支付接口

### 4. 代码优化
- 所有消息常量统一管理在 `domain/uz/messages.ts` 中
- 所有数据库操作都添加了详细的注释说明
- 修复了暂停恢复逻辑中 `break_duration` 字段的更新问题

## 数据库表结构

### operation_logs (操作日志表)
- `id`: 日志ID
- `user_id`: 用户ID
- `qq_number`: QQ号
- `operation`: 操作命令内容
- `created_at`: 创建时间

### user_play_logs (用户游戏记录表)
- `id`: 记录ID
- `qq_number`: QQ号
- `status`: 状态 (0: 未开始, 1: 上机中, 2: 休息/维修, 3: 已结束)
- `start_time`: 开始时间
- `end_time`: 结束时间
- `break_at`: 暂停时间
- `break_duration`: 休息时长

### payment_orders (支付订单表)
- `id`: 订单ID
- `user_id`: 用户ID
- `qq_number`: QQ号
- `out_trade_no`: 外部订单号
- `channel`: 支付渠道
- `amount`: 金额
- `status`: 状态 (0: 待支付, 1: 发送成功, 2: 检查成功, 3: 失败)

## 使用示例

### 上机
```
/uz 上机
```

### 暂停
```
/uz 暂停 吃饭
/uz 暂停 上厕所
```

### 下机
```
/uz 下机
```

### 查看帮助
```
/uz help
```

## 支付集成

支付功能已预留接口，需要后续集成具体的支付平台：

1. 在 `PaymentService.createPaymentLink()` 方法中集成支付平台API
2. 在 `PaymentService.handlePaymentCallback()` 方法中处理支付回调
3. 根据选择的支付平台更新相关配置

## 注意事项

1. 暂停功能需要管理员在配置中启用 `canBreak` 参数
2. 支付订单状态会实时更新，支持异步回调处理
3. 用户折扣根据用户等级自动应用
4. 所有操作都会记录到操作日志中，便于审计和问题排查 