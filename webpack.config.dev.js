const { merge } = require('webpack-merge');
const base = require('./webpack.config.base');

module.exports = merge(base, {
  mode: 'development',
  stats: 'none',
  watch: true,
  devtool: 'eval',
  devServer: {
    contentBase: './build',
  },
});
