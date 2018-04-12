require('dotenv').config();

const { EnvironmentPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
  entry: `./src/main.js`,
  output: {
    filename: '[name].[hash].js',
    path: `${__dirname}/dist`,
    publicPath: process.env.CDN_URL || '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'gitQL',
    }),
    new EnvironmentPlugin({
      API_URL: process.env.API_URL,
      AUTH_CLIENT_ID: process.env.AUTH_CLIENT_ID,
      AUTH_REDIRECT_URI: process.env.AUTH_REDIRECT_URI,
    }),
    new FaviconsWebpackPlugin('./src/assets/gitQL-small.png'),
  ],
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'stage-2', 'react'],
            cacheDirectory: true,
          },
        },
      },
    ],
  },
};
