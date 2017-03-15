const path = require('path');
const webpack = require('webpack');
const root = path.join(process.cwd(), 'src');

module.exports = {
  devtool: 'source-map',

  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3001',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/assets/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader?importLoaders=1'
        ]
      },
      {
        test: /\.(eot|jpg|png|ttf|svg|woff|woff2)$/,
        loader: 'url-loader'
      }
    ]
  },
  resolve: {
    root: root
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
