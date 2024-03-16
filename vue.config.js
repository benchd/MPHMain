
module.exports = {
    devServer: {
      proxy: {
        '^/Connect': {
          target: 'http://localhost:8080/',
          ws: true,
          changeOrigin: true
        },
      }
    }
  }