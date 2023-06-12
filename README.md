# react-vite-tailwindcss-admin

- **安装依赖**

```text
npm install
yarn

# npm install 安装失败，请升级 nodejs 到 16 以上，或尝试使用以下命令：
npm install --registry=https://registry.npm.taobao.org
```

- **启动服务**

```text
npm run dev
yarn run dev
```

- **打包**

```text
# 开发环境
npm run build:dev

# 测试环境
npm run build:test

# 生产环境
npm run build:prod
```

- **Lint：**

```text
# eslint 检测代码
npm run lint:eslint

# prettier 格式化代码
npm run lint:prettier

```

### 文件资源目录 📚

```text
├─ .vscode                # vscode推荐配置
├─ mock                   # 模拟服务器接口数据
├─ public                 # 静态资源文件（忽略打包）
├─ src
│  ├─ api                 # API 接口管理
│  ├─ assets              # 静态资源文件
│  ├─ components          # 全局组件
│  ├─ config              # 全局配置项
│  ├─ hooks               # 常用 Hooks
│  ├─ layout              # 框架布局
│  ├─ routes              # 路由管理
│  ├─ store               # redux store
│  ├─ styles              # 全局样式
│  ├─ utils               # 工具库
│  ├─ views               # 项目所有页面
│  ├─ App.jsx             # 入口页面
│  ├─ main.tsx            # 入口文件
├─ .env                   # vite 常用配置
├─ .env.development       # 开发环境配置
├─ .env.production        # 生产环境配置
├─ .env.test              # 测试环境配置
├─ .eslintignore          # 忽略 Eslint 校验
├─ .eslintrc.cjs          # Eslint 校验配置
├─ .gitignore             # git 提交忽略
├─ .prettierignore        # 忽略 prettier 格式化
├─ .prettierrc.js         # prettier 配置
├─ index.html             # 入口 html
├─ package-lock.json      # 依赖包包版本锁
├─ package.json           # 依赖包管理
├─ postcss.config.js      # postcss 配置
├─ README.md              # README 介绍
├─ tailwind.config.js     # tailwindcss配置文件
├─ vite.config.js         # vite 配置
└─ yarn.lock              # 依赖包包版本锁
```
