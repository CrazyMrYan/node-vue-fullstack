
# Node + Vue 全栈项目简易模板

主要是提供思路，不是功能性的模板，强扩展性，不限制技术栈。

## Feature

- 前后端支持热更新
- 一键启动命令
- 端口转发

## 启动

```shell
# yarn
yarn install
yarn dev
# npm
npm install
npm run dev
```

## 注意

> 虽然指向 3000 端口，但是实际前端端口是 8080，只不过在服务层做了转发。

## 依赖

- express
- http-proxy-middleware
- concurrently
- nodemon
- vue
- @vue/cli-service
- @vue/composition-api
- vue-router
