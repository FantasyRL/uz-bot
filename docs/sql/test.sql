create table public.nft_project_daily_amount
(
    id             uuid                        default gen_random_uuid() not null primary key,
    project_id     uuid                                                  not null,
    sale_date      date                                                  not null,
    sale_amount    numeric(16, 2)              default 0                 not null,
    created_at     timestamp(6) with time zone default CURRENT_TIMESTAMP not null,
    updated_at     timestamp(6) with time zone default CURRENT_TIMESTAMP not null,
    version        bigint                      default 0                 not null,
    deleted_at     timestamp(6) with time zone
);

alter table public.nft_project_daily_amount
    owner to uz;

create index idx_project_daily_sales_project_id_date
    on public.nft_project_daily_amount (project_id, sale_date);