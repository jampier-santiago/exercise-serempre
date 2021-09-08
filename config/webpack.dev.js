const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const path = require("path");

const { HotModuleReplacementPlugin } = require("webpack");

const devConfig = {
  mode: "development",
  devServer: {
    port: 3000,
    static: { directory: path.join(__dirname, "build") },
    open: true,
    hot: true,
  },
  plugins: [new HotModuleReplacementPlugin()],
  devtool: "eval-source-map",
};

module.exports = merge(common, devConfig);
