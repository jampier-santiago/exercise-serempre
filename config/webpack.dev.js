import { merge } from "webpack-merge";
import common from "./webpack.common";
import { join } from "path";

// import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
// import { HotModuleReplacementPlugin } from "webpack";

const devConfig = {
  mode: "development",
  devServer: {
    port: 3000,
    // eslint-disable-next-line no-undef
    static: { directory: join(__dirname, "build") },
    open: true,
    hot: true,
  },
  // plugins: [new HotModuleReplacementPlugin(), new ReactRefreshWebpackPlugin()],
  devtool: "eval-source-map",
};

export default merge(common, devConfig);
