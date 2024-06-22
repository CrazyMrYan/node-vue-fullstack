// api.js
const express = require('express');
const router = express.Router();

// 示例 API 路由
router.get('/greeting', (req, res) => {
  res.status(200).json({ message: 'Hello from the Node.js server!!!' });
});

module.exports = router;
