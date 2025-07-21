# uz-bot
backend of qqBot, use typeScript

# 快速上手
- 确保已有node npm nvm环境
- biz/config/config.yaml已配置
```bash
npm ci # 下载node_modules依赖
docker compose up -d # 启动外部中间件依赖
make dev # 需要能够运行makefile
```

# 目录说明
```text
.
├── Makefile                      # 常用脚本：dev / start / prisma / docker / OpenAPI 等
├── README.md                     # 项目说明 & 快速上手
├── biz                           # 后端代码
│   ├── api                       #   HTTP 入口层（只做请求↔响应）
│   │   ├── index.ts              #     统一挂载 openapi-backend → Express
│   │   └── ping                  #
│   │       └── handler.ts        #     将req处理后传递到internal，处理返回的resp
│   ├── cmd                       #   entry
│   │   ├── server.ts             #     
│   ├── config                    #   配置读取
│   │   ├── config.yaml           #     默认本地配置
│   │   └── index.ts              #     
│   ├── db                        #   数据库封装（Prisma/TypeORM）
│   │   ├── index.ts              #     初始化连接、事务 helper
│   │   └── index.js              #     编译产物
│   ├── generated                 #   ——自动生成的代码，请勿手改
│   │   ├── ping.d.ts             #     OpenAPI → TypeScript 类型
│   │   └── prisma                #     `prisma generate` 输出
│   ├── internal                  #   业务逻辑
│   │   └── ping                  #
│   │       └── ping.ts           #     核心逻辑
│   └── utils                     #   通用工具函数
├── dist                          # ——`npm run build` 产物（纯 JS，可直接部署）
│   └── …                         #   结构与 biz/ 对应
├── docker
│   └── docker-compose.yaml       # 本地 Postgres / Redis 等依赖服务
├── docs                          # 项目文档 & IDL
│   ├── idl                       #
│   │   └── ping.yaml             #   OpenAPI 3 规范文件
│   └── sql                       #
│       └── test.sql              #   示例 SQL / 数据准备
├── openapitools.json             # openapi-generator CLI 本地配置
├── package.json                  # NPM 依赖及脚本；_moduleAliases 定义 @ → dist
├── package-lock.json             # 锁文件，用 `npm ci` 精准复现依赖
├── prisma
│   └── schema.prisma             # 数据模型，配合 `make model`
└── tsconfig.json                 # TypeScript 编译配置（rootDir=biz, outDir=dist）

```