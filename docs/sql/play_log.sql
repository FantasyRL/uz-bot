create table public.user_play_logs
(
    id             uuid                        default gen_random_uuid() not null
        primary key,
    qq_number      text                                                  not null,
    status         smallint                    default 0                 not null,
    start_time     timestamp(6) with time zone default CURRENT_TIMESTAMP not null,
    end_time       timestamp(6) with time zone,
    break_at       timestamp(6) with time zone,
    break_duration integer                     default 0                 not null,
    created_at     timestamp(6) with time zone default CURRENT_TIMESTAMP not null,
    updated_at     timestamp(6) with time zone default CURRENT_TIMESTAMP not null,
    deleted_at     timestamp(6) with time zone
);

comment on table public.user_play_logs is '用户游戏记录表';

comment on column public.user_play_logs.id is '记录ID，主键';

comment on column public.user_play_logs.qq_number is 'qq号';

comment on column public.user_play_logs.status is '状态 (0: 未开始, 1: 上机中, 2: 休息/维修,3: 已结束)';

comment on column public.user_play_logs.start_time is '开始时间';

comment on column public.user_play_logs.end_time is '结束时间';

comment on column public.user_play_logs.break_at is '休息/维修时间';

comment on column public.user_play_logs.break_duration is '休息时长(秒单位，最大5h)';

comment on column public.user_play_logs.created_at is '创建时间';

comment on column public.user_play_logs.updated_at is '更新时间';

comment on column public.user_play_logs.deleted_at is '删除时间（软删除）';

alter table public.user_play_logs
    owner to uz;

create index idx_user_play_logs_qq_number_idx
    on public.user_play_logs (qq_number);

