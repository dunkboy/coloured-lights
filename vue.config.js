module.exports = {
  devServer: {
    port: process.env.VUE_APP_SERVER_PORT
  },
  configureWebpack: {
    resolve: {
      alias: {
        assets: '@/assets',
        common: '@/common',
        components: '@/components',
        network: '@/network',
        constant: '@/constant',
        views: '@/views'
      }
    }
  }
}
