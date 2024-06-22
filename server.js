// server.js
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const apiRoutes = require('./apis');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV === 'production') {
  // dist 目录不存在则创建dist
  if (!fs.existsSync('dist')) {
    fs.mkdirSync('dist');
  }
  app.get(express.static(path.join(__dirname, 'dist')));
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    console.log(path.join(__dirname, 'dist', 'index.html'));
  });
}

// 服务端接口，代理至 /api
app.use('/api', apiRoutes);

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
