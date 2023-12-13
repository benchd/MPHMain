
module.exports = {
    devServer: {
      proxy: {
        '^/Connect': {
          target: 'http://localhost:5020/',
          ws: true,
          changeOrigin: true
        },
      }
    }
  }