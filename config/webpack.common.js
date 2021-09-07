import { CleanWebpackPlugin } from "clean-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { resolve as _resolve } from "path";

export const entry = "./src/index.js";
export const output = {
  // eslint-disable-next-line no-undef
  path: _resolve(__dirname, "../build"),
  filename: "[name].[contenthash].js",
  publicPath: "",
};
export const module = {
  rules: [
    { use: "babel-loader", test: /.(js|jsx)$/, exclude: /node_modules/ },
    {
      test: /.(css|scss|sass)$/,
      use: ["style-loader", "css-loader", "sass-loader", "postcss-loader"],
    },
    {
      type: "asset",
      test: /\.(png|jpg|svg|jpeg|gif)$/i,
    },
  ],
};
export const resolve = { extensions: [".js", ".jsx", ".json"] };
export const plugins = [
  new CleanWebpackPlugin(),
  new HtmlWebpackPlugin({ template: "./public/index.html" }),
];
