const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const StartServerPlugin = require('start-server-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    api: [
      './api/api',
    ],
  },
  target: 'node',
  externals: [
    nodeExternals(),
  ],
  resolve: {
    extensions: ['.js'],
  },
  module: {
  },
  plugins: [
    new CleanWebpackPlugin({
      path: path.join(__dirname, '../.build/api'),
      root: path.join(__dirname, '..'),
      verbose: true,
      dry: false,
    }),
    new StartServerPlugin({
      name: 'api.js',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
      __DEV__: true,
    }),
  ],
  output: {
    path: path.join(__dirname, '../.build/api'),
    filename: '[name].js',
  },
};
