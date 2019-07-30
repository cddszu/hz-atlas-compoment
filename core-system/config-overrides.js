const {
  override,
  overrideDevServer,
  fixBabelImports,
  addLessLoader,
  watchAll,
  addPostcssPlugins
} = require("customize-cra")

var px2rem = require('./src/utils/px2rem-exclude')

module.exports = {
  webpack: override(

    // 用js的方式导入antd及其样式：style为true表示导入antd.less; 为false表示不使用js的方式导入antd.less或antd.css；为'css'表示使用antd.css;
    fixBabelImports("import", {
      libraryName: "antd-mobile", libraryDirectory: "es", style: true  // 为false或css会导致addLessLoader失效
    }),
    addLessLoader({
      javascriptEnabled: true,
      // modifyVars: { "@primary-color": "#D24545" } // 深红色
    }),
    // addPostcssPlugins([
    //   px2rem({
    //     remUnit: 75,
    //     exclude: /node_modules|antd-mobile/i
    //   })
    // ]),
  ),
  devServer: overrideDevServer(
    // dev server plugin
    watchAll()
  )
}
