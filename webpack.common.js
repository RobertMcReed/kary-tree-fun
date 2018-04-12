require('dotenv').config();

const { EnvironmentPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: `./src/main.js`,
  output: {
    filename: '[name].[hash].js',
    path: `${__dirname}/dist`,
    publicPath: process.env.CDN_URL || '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'K-Ary Trees, Tries, and Devtools',
    }),
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
            plugins: ['transform-react-jsx-source'],
            cacheDirectory: true,
          },
        },
      },
    ],
  },
};
