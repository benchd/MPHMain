
module.exports = {
    devServer: {
      proxy: {
        '^/Connect': {
          target: 'http://localhost:5173/',
          ws: true,
          changeOrigin: true
        },
      }
    }
  }