const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './index.js',
  mode: 'development',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'my-first-webpack-ts.bundle.js'
  },
  resolve: { extensions: ['*', '.js', '.jsx', '.ts', '.tsx'] },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      { test: /\.(tsx|ts)$/, loader: 'ts-loader' },
      {
        test: /\.css$/,
        use: [
          // [style-loader](/loaders/style-loader)
          { loader: 'style-loader' },
          // [css-loader](/loaders/css-loader)
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          // [sass-loader](/loaders/sass-loader)
          { loader: 'sass-loader' }
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      }
    ]
  },
  devServer: {
    // contentBase: path.join(__dirname, "public/"),
    contentBase: './dist',
    port: 3000,
    // publicPath: "http://localhost:3000/dist/",
    hot: true,
    //  When using the HTML5 History API,
    //  the index.html page will likely have to be served in place of any 404 responses.
    //  Enable devServer.historyApiFallback by setting it to true:
    historyApiFallback: true
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: './public/index.html' })
  ]
};
