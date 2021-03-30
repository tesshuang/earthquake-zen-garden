const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: './index.html',
});

module.exports = {
  entry: './src',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      // {
      //   test: /\.(js|jsx)/,
      //   exclude: /node_modules/,
      //   use: ['babel-loader'],
      // },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    modules: [__dirname, 'src', 'node_modules'],
    extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
  },
  plugins: [htmlPlugin],
};
