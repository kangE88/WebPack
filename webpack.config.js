var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
//   mode: "none",
  entry: "./index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
  },
  devServer: {
    port: 9000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      //index.html 탬플릿을 기반으로 빌드 결과물을 추가해줌
      template: 'index.html',
    }),
  ],
};

// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const path = require("path");
// const { template } = require("lodash");

// module.exports = {
//   entry: "./index.js",
//   output: {
//     path: path.resolve(__dirname, "./dist"),
//     filename: "bundle.js",
//   },
//   devServer: {
//       port: 9000,
//   },
//   plugins: [new HtmlWebpackPlugin({template: 'index.html',})],
// };