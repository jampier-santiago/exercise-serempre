const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const path = require("path");

const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const { HotModuleReplacementPlugin } = require("webpack");

const devConfig = {
    mode: "development",
    devServer: {
        port: 3000,
        static: { directory: path.join(__dirname, "build") },
        open: true,
        hot: true,
    },
    // plugins: [new HotModuleReplacementPlugin(), new ReactRefreshWebpackPlugin()],
    devtool: "eval-source-map",
};

module.exports = merge(common, devConfig);
