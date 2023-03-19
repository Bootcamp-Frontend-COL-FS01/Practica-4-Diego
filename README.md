# Tic Tac Toe with Webpack (Updated with TypeScript)

The present project aims to implement a simple configuration file with webpack in order to deliver an optmized vanilla TS project.

A new plugin was added in order to minify the CSS files.

The relevant webpack file is:

```
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const isProduction = process.env.NODE_ENV == "production";
const stylesHandler = isProduction
  ? MiniCssExtractPlugin.loader
  : "style-loader";

module.exports = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Output Management",
      template: "src/index.html",
    }),
    new MiniCssExtractPlugin(),
    new ForkTsCheckerWebpackPlugin({
      async: false,
    }),
  ],
  mode: isProduction ? "production" : "development",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [stylesHandler, "css-loader"],
      },
      {
        test: /\.(ts|js)?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-typescript"],
          },
        },
      },
    ],
  },
  optimization: {
    minimizer: [`...`, new CssMinimizerPlugin()],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  devServer: {
    static: path.join(__dirname, "dist"),
    compress: true,
    port: 4000,
  },
};

```

You can check the live demo at [Netlify](https://challenge-webpack-tictactoe-with-ts.netlify.app/):

![Image](https://dl.dropboxusercontent.com/s/vqtzv1ob0fe3ebp/image%201.png?dl=0)
