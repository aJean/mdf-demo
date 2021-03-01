## mdf-node 混合项目
使用新的 node 容器部署，支持自定义 nginx proxy

### 目录规范
- src/client 纯前端页面代码
- src/server node 服务端代码

### 工程规范
经过构建，最终产物包含两个目录
- static 所有静态资源都放到这里面
- server 服务端代码

### 开发规范
因为有 node 所以不再提供代理服务，由 node 中间件来处理
- 进入 client 执行 yarn dev
- 进入 server 执行 yarn dev:server

### 启动进程
node 端口 9000
node 进程要自己处理信号，这块可以放在框架里做