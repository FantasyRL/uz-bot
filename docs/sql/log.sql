create table public.operation_logs
(
    id         uuid                        default gen_random_uuid() not null
        primary key,
    user_id    uuid                                                  not null,
    qq_number  text                                                  not null,
    operation  text                                                  not null,
    created_at timestamp(6) with time zone default CURRENT_TIMESTAMP not null,
    updated_at timestamp(6) with time zone default CURRENT_TIMESTAMP not null,
    deleted_at timestamp(6) with time zone
);

comment on table public.operation_logs is '操作日志表';

comment on column public.operation_logs.id is '日志ID，主键';

comment on column public.operation_logs.user_id is '用户ID';

comment on column public.operation_logs.qq_number is '用户QQ号';

comment on column public.operation_logs.operation is 'command内容';

comment on column public.operation_logs.created_at is '创建时间';

comment on column public.operation_logs.updated_at is '更新时间';

alter table public.operation_logs
    owner to uz;

