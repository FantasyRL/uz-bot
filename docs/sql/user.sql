create table public.users
(
    id                 uuid                        default gen_random_uuid()                                  not null
        primary key,
    qq_number          text                                                                                   not null,
    nick_name          text                                                                                   not null,
    role               text                        default '用户'::text                                       not null,
    status_expire_time timestamp(6) with time zone default '2099-07-28 10:00:00+00'::timestamp with time zone not null,
    status             smallint                    default 1                                                  not null,
    source             text                        default '654627508'::text                                  not null,
    invited_by         text                        default ''::text                                           not null,
    discount           numeric(12, 2)              default 1                                                  not null,
    total_time         bigint                                                                                 not null,
    total_amount       numeric(12, 2)              default 0                                                  not null,
    play_count         bigint                      default 0                                                  not null,
    last_come_time     timestamp(6) with time zone default NULL::timestamp with time zone,
    created_at         timestamp(6) with time zone default CURRENT_TIMESTAMP                                  not null,
    updated_at         timestamp(6) with time zone default CURRENT_TIMESTAMP                                  not null,
    deleted_at         timestamp(6) with time zone
);

comment on table public.users is '用户主表';

comment on column public.users.id is '用户ID，主键';

comment on column public.users.qq_number is 'qq号';

comment on column public.users.nick_name is '用户昵称';

comment on column public.users.role is '用户角色(加着玩的)';

comment on column public.users.status_expire_time is '折扣过期时间(懒加载时检测)';

comment on column public.users.status is '用户状态 (1: 正常, 0: 禁用,896: 管理,2: 周卡,3: 小月卡,4: 大月卡,573: 金主,5: 可休息)';

comment on column public.users.source is '用户来源 (qq群号)';

comment on column public.users.invited_by is '邀请人qq号';

comment on column public.users.discount is '折扣(正常为1)';

comment on column public.users.total_time is '累计游玩时长(单位: 分)';

comment on column public.users.total_amount is '累计消费金额(单位: 元)';

comment on column public.users.play_count is '累计游玩次数';

comment on column public.users.last_come_time is '上次来玩时间';

comment on column public.users.created_at is '创建时间';

comment on column public.users.updated_at is '更新时间';

comment on column public.users.deleted_at is '删除时间（软删除）';

alter table public.users
    owner to uz;

create unique index idx_users_qq_number_idx
    on public.users (qq_number);

