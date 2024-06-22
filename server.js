// server.js
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const apiRoutes = require('./apis');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// 服务端接口，代理至 /api
app.use('/api', apiRoutes);

if (process.env.NODE_ENV === 'production') {
  // 提供 dist 目录中的静态文件
  app.use(express.static(path.join(__dirname, 'dist')));

  // 处理所有路由，返回 index.html
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });
}

console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV === 'development') {
  app.use(
    '/',
    createProxyMiddleware({
      target: 'http://localhost:8080',
      changeOrigin: true
    })
  );
}

// 启动 Node.js 服务
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
