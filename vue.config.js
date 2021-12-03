module.exports = {
  // ...
  chainWebpack: config => {
    config.module
      .rule('raw')
      .test(/\.js$/)
      .use('raw-loader')
      .loader('raw-loader')
      .end()
  }
}
