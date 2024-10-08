const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');

const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;

const isGHPages = true;

module.exports = {
  entry: path.resolve(__dirname, "..", "./src/index.tsx"),
  output: {
    path: path.resolve(__dirname, "..", "dist"),
    filename: "bundle.js",
    publicPath: isGHPages ? '/tt-employee-control-12-8-2024/' : '/',
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    modules: [
      path.resolve(__dirname, "..", "src"),
      'node_modules',
    ],
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.(ts|js)x?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: cssRegex,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
        exclude: [
          /node_modules/,
          sassModuleRegex,
        ],
      },
      {
        test: sassModuleRegex,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          'sass-loader',
        ],
        include: path.resolve(__dirname, '..', 'src'),
      },
      {
        test: sassRegex,
        exclude: sassModuleRegex,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
        include: path.resolve(__dirname, '..', 'src'),
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new Dotenv(),
    new webpack.DefinePlugin({
      'process.env.PUBLIC_URL': JSON.stringify(process.env.PUBLIC_URL),
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "..", "./src/index.html"),
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: './404.html', to: '404.html' }, // Копирует файл 404.html в корень папки сборки
      ],
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, "..", "dist"),
  },
};
