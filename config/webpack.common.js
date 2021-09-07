const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "../build"),
        filename: "[name].[contenthash].js",
        publicPath: "",
    },

    module: {
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
    },
    resolve: { extensions: [".js", ".jsx", ".json"] },
    plugins: [new CleanWebpackPlugin(), new HtmlWebpackPlugin({ template: "./public/index.html" })],
};
