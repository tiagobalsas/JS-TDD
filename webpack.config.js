// eslint-disable-next-line no-unused-vars
const webpack = require('webpack');

module.exports = {
  entry: {
    filename: './app.js',
  },
  output: {
    filename: './build.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          preset: ['es2015', { modules: false }],
        },
      },
    ],
  },
};
