var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: path.join(__dirname, "src"),
    entry: "./js/client.js",
    output: {
      path: __dirname + "/dist/",
      filename: "client.min.js",
      publicPath: './'
    },
    module: {
      loaders: [
        {
          test: /\.js?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader',
          query: {
            presets: ['react', 'latest', 'stage-0'],
            plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
          }
      },
      {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract('style', 'css-loader!sass-loader')
        // loader: 'style-loader!css-loader!sass-loader!import-glob-loader'
      },
      {
          test: /\.(png|jpg)$/,
          loader: 'file-loader?name=images/img-[sha512:hash:base64:7].[ext]'
      },
      {
          test: /\.json$/,
          loader: 'json'
      }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'index.html',
        hash: false,
        filename: 'index.html',
        inject: 'body'
      }),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false, warnings: true }),
      new ExtractTextPlugin('style.css')
    ],
};
