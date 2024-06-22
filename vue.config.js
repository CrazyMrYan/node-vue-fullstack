const path = require('path');

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true
      }
    }
  },
  outputDir: 'dist',
  configureWebpack: {
    resolve: {
      alias: {
        '@/': path.resolve(__dirname, 'src'), // 简化 'src' 目录的导入
        '@/components': path.resolve(__dirname, 'src/components'), // 简化 'src/components' 目录的导入
        '@/views': path.resolve(__dirname, 'src/views'), // 简化 'src/views' 目录的导入
        '@/assets': path.resolve(__dirname, 'src/assets'), // 简化 'src/assets' 目录的导入
        '@/utils': path.resolve(__dirname, 'src/utils'), // 简化 'src/utils' 目录的导入
        '@/pages': path.resolve(__dirname, 'src/pages'), // 简化 'src/utils' 目录的导入
      }
    }
  }
};
