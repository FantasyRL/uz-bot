-- auto-generated definition
create table payment_orders
(
    id           uuid                        default gen_random_uuid() not null
        primary key,
    user_id      uuid                                                  not null,
    qq_number    text                                                  not null,
    out_trade_no varchar(30)                                           not null
        unique,
    channel      smallint                                              not null,
    amount       numeric(12, 2)                                        not null,
    status       smallint                    default 0                 not null,
    created_at   timestamp(6) with time zone default CURRENT_TIMESTAMP not null,
    updated_at   timestamp(6) with time zone default CURRENT_TIMESTAMP not null,
    deleted_at   timestamp(6) with time zone
);

comment on table payment_orders is '支付订单表';

comment on column payment_orders.id is '订单ID，主键';

comment on column payment_orders.user_id is '用户ID，外键';

comment on column payment_orders.qq_number is '用户QQ号';

comment on column payment_orders.out_trade_no is '本地订单号';

comment on column payment_orders.channel is '支付渠道 (1: zfb, 2: wx)';

comment on column payment_orders.amount is '支付金额';

comment on column payment_orders.status is '订单状态 (0: 未发送付款码, 1: 发送付款码, 2: 支付检查成功 3: 支付检查失败)';

comment on column payment_orders.created_at is '创建时间';

comment on column payment_orders.updated_at is '更新时间';

alter table payment_orders
    owner to uz;

create index idx_payment_orders_qq_number
    on payment_orders (qq_number);

create index idx_payment_orders_out_trade_no
    on payment_orders (out_trade_no);

