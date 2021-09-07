import { merge } from "webpack-merge";
import common from "./webpack.common";

const prodConfig = {
  mode: "production",
  devtool: "source-map",
  optimization: { splitChunks: { chunks: "all" } },
};

export default merge(common, prodConfig);
