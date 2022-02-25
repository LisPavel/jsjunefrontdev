const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const srcDir = path.resolve(__dirname, "src");
const targetDir = path.resolve(__dirname, "dist");
const srcAssetsDir = path.resolve(srcDir, "assets");

module.exports = {
  mode: "development",

  entry: path.resolve(srcDir, "index.js"),

  output: {
    path: targetDir,
    filename: "index.js",
    clean: true,
  },

  devServer: {
    static: targetDir,
    port: 3000,
    open: true,
  },

  plugins: [
    new HtmlWebpackPlugin({ template: path.resolve(srcDir, "index.html") }),
    new MiniCssExtractPlugin({ filename: "index.css" }),
  ],

  resolve: {
    alias: {
      "@assets": srcAssetsDir,
    },
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        include: [srcDir],
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
};
