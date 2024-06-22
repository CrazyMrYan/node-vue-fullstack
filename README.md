
# Node + Vue 全栈项目简易模板

> 主要是提供思路，不是功能性的模板，强扩展性，不限制技术栈。

> Nodejs 需要切换至 14.x || 16.x || 18.x 版本

> 默认端口 3000，启动项目之后打开 http://localhost:3000/ 即可。

## 视频演示

[![视频缩略图](https://img.youtube.com/vi/3nwlU3_E9Ck/0.jpg)](https://youtu.be/3nwlU3_E9Ck)

## Feature

- 前后端支持热更新
- 一键启动命令
- 端口转发

## 使用

运行开发环境

```shell
# yarn
yarn install
yarn dev
# npm
npm install
npm run dev
```

运行正式环境

```shell
# yarn
yarn install
yarn prod
# npm
npm install
npm run prod
```

查看正式环境日志

```shell
#yarn
yarn logs
#npm
npm run logs
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
