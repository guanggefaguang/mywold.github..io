const baseURL = 'http://120.24.175.12:8189/dataplatform'
const baseUrl = 'http://120.24.175.12:8389/localdata'

module.exports = {
  proxy: {
    '/api': {
      target: baseUrl,  // 接口域名
      secure: false,  // 如果是https接口，需要配置这个参数
      changeOrigin: true,  //是否跨域
      pathRewrite: {
        '^/api': ''   //需要rewrite的,
      }
    }
  }
}
