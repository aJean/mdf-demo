### mdf 开发调试项目
不同技术栈独立安装依赖，这个用于本地调试，有些路径与正式模式不太一样
约定 demo 全部使用 yarn link 进行开发调试

### 调试 react
主要涉及到 mdfjs 和 @mdfjs/react 两个模块，其中 @mdfjs/react 是 react 方向的工程模块，同理 vue、node

#### 启动
本地开发需要 link 和 pkg 的配合

``` shell
clone medgit@git.medlinker.com:libs/mdf-js.git
clone medgit@git.medlinker.com:libs/mdf-react.git
cd mdf-js & yarn link
cd mdf-react & yarn link
cd mdf-demo/packages/react & yarn link mdfjs & yarn link @mdfjs/react
yarn dev
```

### 旧项目迁移
主要介绍如何从旧的项目迁移到 mdf，后面会产出详细文档，这个看不明白的可以直接问我

#### 依赖
react 项目要确保以下依赖正确安装
- mdfjs、@mdfjs/react、core-js、regenerator-runtime
- @commitlint/cli、@commitlint/config-conventional、husky、lint-staged

#### 配置
项目相关的所有配置都放在 src/config 下
注意 env 变量的前缀改为 MDF_APP_NAME
```bash
MEDLINKER_APP_NAME=医联互联网医院 => MDF_APP_NAME=医联互联网医院
```
配置和 env 都通过后缀绑定环境，例如 config.prod.ts env.dev 等

#### 入口
mdf 项目不需要自己提供入口，框架会生成入口文件 .tmp/mdf.tsx

#### 目录规范
src/pages 下面的页面全部会生成路由配置，所以我们只要写好根路由，就是项目的入口页
src/models 与旧的模块规范一样，只是统一都放到这个目录下管理

#### src/app.ts
这是运行时框架的配置文件，可以提供入口文件的一些作用，不过都是以函数的方式
例如 beforeRender 是在渲染之前执行，用来做一些准备工作或者第三方库的初始化
appOpts 用于配置数据流框架，fundamental 或者 dva
更多的栗子可以参考 med-h5-assistant

```javascript
// 这是一个 wrap root element 的栗子
appElement(Child: any) {
  return React.createElement(appErrorGate(Child), null);
}
```

#### 自定义 webpack
需要自己配置 webpack 的 config 提供了 chainWebpack(chain) => {} 方法
可以使用 chain 对象自己寻找节点定制

#### 基础插件
gio、sentry、rem 等插件都做到了配置化，直接在 config 里面进行配置

#### lint
mdf 内置了 lint 所以 eslint stylelint 这种配置文件就不需要了
huskyrc 需要改成如下
```json
{
  "hooks": {
    "pre-commit": "lint-staged",
    "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
  }
}
```
同时 package.json 要加以下代码
```json
"gitHooks": {
  "pre-commit": "lint-staged"
},
"lint-staged": {
  "*.{ts,tsx}": [
    "yarn mdf lint --es"
  ],
  "*.css": [
    "yarn mdf lint --css"
  ],
  "*.scss": [
    "yarn mdf lint --sass"
  ],
  "*.less": [
    "yarn mdf lint --less"
  ]
},
```

#### cmd script
```json
"scripts": {
  "dev": "MDF_ENV=dev mdf dev",
  "build": "MDF_ENV=prod mdf build",
  "build:qa": "MDF_ENV=qa mdf build",
  "lint": "yarn mdf lint --es",
  "react": "yarn mdf create"
},
```

#### tsconfig
建议使用我提供的这个配置
```json
{
  "compilerOptions": {
    "target": "esnext",
    "module": "commonjs",
    "moduleResolution": "node",
    "jsx": "preserve",
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noImplicitReturns": true,
    "suppressImplicitAnyIndexErrors": true,
    "declaration": true,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "baseUrl": "./",
    "paths": {
      "@/*": ["src/*"],
      "@@/*": [".tmp/*"],
      "mdf": ["node_modules/mdfjs"]
    }
  },
  "include": [
    ".tmp/**/*",
    "src/**/*",
    "config/**/*",
    "typings.d.ts"
  ]
}
```

#### 代码修改
- request 直接从 mdf 引入
- css 模块语法变更为 import styles from './home.scss?module';

#### 有什么其他问题 @ 我 补充





