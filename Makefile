# Makefile
DIR            = $(shell pwd)
CMD            = $(DIR)/biz/cmd
CONFIG_PATH    = $(DIR)/biz/config
DATABASE_URL  ?= postgresql://uz:uz@localhost:5432/uz

OPENAPI_DIR    := $(DIR)/docs/idl

# ─────────────── 帮助 ───────────────
help:
	@echo ""
	@echo "╭──────────────────────  可用命令  ────────────────────────────────"
	@echo "│ make dev              启动开发环境 (ts-node-dev 热更新) "
	@echo "│ make start            构建并启动生产环境               "
	@echo "│ make prisma-pull      从数据库拉 schema                "
	@echo "│ make prisma-generate  根据 schema 生成 TS 客户端        "
	@echo "│ make model            pull + generate 一条龙            "
	@echo "│ make docker-up        启动 docker-compose 依赖服务      "
	@echo "│ make docker-down      停止/删除容器                     "
	@echo "│ make docker-logs      跟踪容器日志                      "
	@echo "│ make gen-<name>       根据 docs/idl/<name>.yaml 生成类型 "
	@echo "╰─────────────────────────────────────────────────────────────────"


.PHONY: dev start prisma-pull prisma-generate model \
        docker-up docker-down docker-logs \
        api-clean gen-% help

# ─────────────── 项目运行 ───────────────
dev:            ## 开发：热重载 + ts-node-dev
	rm -rf ./dist && npm run build && CONFIG_FILE=$(CONFIG_PATH)/config.yaml npm run dev

start:          ## 生产：编译到 dist 并启动
	CONFIG_FILE=dist/config/config.yaml \
	npm run build && \
	npm start

# ─────────────── Prisma ───────────────
prisma-pull:    ## 从数据库拉 schema → 更新 prisma/schema.prisma
	DATABASE_URL=$(DATABASE_URL) npx prisma db pull --schema=$(DIR)/prisma/schema.prisma

prisma-generate:## 读取 schema.prisma → 生成 TS 客户端
	DATABASE_URL=$(DATABASE_URL) npx prisma generate --schema=$(DIR)/prisma/schema.prisma

model: prisma-pull prisma-generate  ## 一键同步数据库 → 生成客户端

# ─────────────── Docker dev env ───────────────
docker-up:      ## 本地依赖服务 (Postgres / Redis …)
	docker compose up -d

docker-down:    ## 停止并删除容器
	docker compose down

docker-logs:    ## 查看容器日志
	docker compose logs -f

# ─────────────── OpenAPI 类型生成 ───────────────

gen-%:          ## docs/idl/$*.yaml → biz/generated/$*.d.ts
	npx openapi-typescript $(OPENAPI_DIR)/$*.yaml -o biz/generated/$*.d.ts

