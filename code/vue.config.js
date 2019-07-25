
const path = require('path');
module.exports = {
    // 基本路径
    baseUrl: './',
    // 输出文件目录
    outputDir: 'dist',
    // webpack-dev-server 相关配置
    devServer: {
      port: 8888,
    },
  }
// module.exports = {
//   // 基本路径
//   baseUrl: './',
//   // 生产环境是否生成 sourceMap 文件
//   productionSourceMap: false,
//   // 服务器端口号
//   devServer: {
//       port: 1234,
//   },
// }

  // const path = require('path');
  // module.exports = {
  //   publicPath:'/',    // 公共路径
  // }
 
  // module.exports = {
  //   configureWebpack: {
  //     resolve: {
  //       alias: {
  //         'assets': '@/assets',
  //         'components': '@/components',
  //         'views': '@/views',
  //       }
  //     }
  //   },
  // }
