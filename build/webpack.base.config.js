const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");  //替代 3.0 extract-text-webpack-plugin
const OptimizeCssAssetsPlugin=require("optimize-css-assets-webpack-plugin");  //压缩css
const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    index: path.resolve(__dirname, "../examples/example2/src/index.js")
  },
  output: {
    filename: "static/js/[name].[contenthash:8].js", 
    path: path.resolve(__dirname, "../dist/example2"), //打包目录
    publicPath:''
  },  
  module: {
    rules: [
      {
        test: /\.(s(c|a)ss)$/,
        exclude: /node_modules/,
        use: [
          {
            loader:MiniCssExtractPlugin.loader,// 单独分离css 文件
          }, 
          {
            loader: "css-loader",
            options: {
              importLoaders: 3, //指定css-loader处理前最多可以经过的loader个数,设为1 好像也没区别
              modules:false // 是否开启css 模块化
            } 
          },
          'postcss-loader',"sass-loader"
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "static/css/[name].css", 
      chunkFilename: "static/css/[id].css"  //分片
    }),
  ],
  optimization:{
    minimize:true, //默认production 才为true  
    minimizer:[
      new OptimizeCssAssetsPlugin()
    ]

  }
};
