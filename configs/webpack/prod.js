// production config
const merge = require("webpack-merge");
const { resolve } = require("path");
const DotenvPlugin = require("webpack-dotenv-plugin");

const commonConfig = require("./common");

module.exports = merge(commonConfig, {
    mode: "production",
    entry: "./index.tsx",
    output: {
        filename: "js/bundle.[hash].min.js",
        path: resolve(__dirname, "../../dist"),
        publicPath: "/",
    },
    devtool: "source-map",
    plugins: [
        new DotenvPlugin({
            sample: "./.env.sample",
            path: "./.env.production",
        }),
    ],
});
