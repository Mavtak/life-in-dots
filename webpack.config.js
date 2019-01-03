const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    'index': './src/index.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
};
