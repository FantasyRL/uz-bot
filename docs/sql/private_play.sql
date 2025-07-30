create table private_play_logs
(
    id             uuid                        default gen_random_uuid()    not null
        primary key,
    unique_id SERIAL not null,
    qq_number      text                                                     not null,
    start_time     timestamp(6) with time zone not null,
    end_time       timestamp(6) with time zone not null ,
    price decimal(12,2) not null ,
    remark       text not null ,
    created_at     timestamp(6) with time zone default CURRENT_TIMESTAMP    not null,
    updated_at     timestamp(6) with time zone default CURRENT_TIMESTAMP    not null,
    deleted_at     timestamp(6) with time zone
);

comment on table private_play_logs is '包场记录表';
comment on column private_play_logs.id is '记录ID，主键';
comment on column private_play_logs.unique_id is '唯一ID，自增';
comment on column private_play_logs.qq_number is '发起人qq号';
comment on column private_play_logs.remark is '备注';
comment on column private_play_logs.start_time is '开始时间';
comment on column private_play_logs.end_time is '结束时间';
comment on column private_play_logs.created_at is '创建时间';
comment on column private_play_logs.updated_at is '更新时间';
comment on column private_play_logs.deleted_at is '删除时间（软删除）';
alter table private_play_logs
    owner to uz;
create index idx_private_play_logs_qq_number_idx
    on private_play_logs (qq_number);
create unique index idx_private_play_logs_unique_id
    on private_play_logs (unique_id);