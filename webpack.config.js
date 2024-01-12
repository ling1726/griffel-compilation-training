// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {
  GriffelCSSExtractionPlugin,
} = require("@griffel/webpack-extraction-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isProduction = process.env.NODE_ENV == "production";

const config = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  optimization: {
    // This is set only for demo purposes to explore the production bundle
    minimize: false,
  },
  devServer: {
    open: true,
    host: "localhost",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
    }),

    // CSS extraction
    // new MiniCssExtractPlugin(),
    // new GriffelCSSExtractionPlugin(),
  ],
  module: {
    rules: [
      // CSS extraction
      // {
      //   test: /\.styles.(js|ts|tsx)$/,
      //   use: {
      //     loader: GriffelCSSExtractionPlugin.loader,
      //   },
      // },
      // {
      //   test: /\.css$/,
      //   use: [MiniCssExtractPlugin.loader, "css-loader"],
      // },
      
      // Ahead of time (AOT) compilation
      // {
      //   test: /\.styles.(js|jsx)$/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: "@griffel/webpack-loader",
      //   },
      // },
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },
    ],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
};
