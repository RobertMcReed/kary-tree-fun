const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const { HotModuleReplacementPlugin } = require('webpack');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    open: true,
    hot: true,
    historyApiFallback: true,
  },
  plugins: [
    new HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
});
