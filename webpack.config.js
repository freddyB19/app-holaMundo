const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebPackPlugin = require('copy-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    index:{import: './src/index.js', dependOn: 'shared',},
    another:{import: './src/another.js', dependOn: 'shared',},
    styles:{import: './src/another.css.js', dependOn: 'shared',},

    shared: 'lodash',
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: "js/[name].bundle.js"
  },
  optimization: {
    runtimeChunk: 'single',
  },
  resolve: {
    extensions: [".js"],
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        mimetype: 'image/svg+xml',
        scheme: 'data',
        type: 'asset/resource',
        generator: {
          filename: 'icons/[hash].svg'
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCSSExtractPlugin.loader
          },
          'css-loader',
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(
      {
        inject: true,
        template: './root/index.html',
        filename: './index.html',
      }
    ),
    new MiniCSSExtractPlugin({
      filename: "css/[name].css",
      chunkFilename: "[id].css",
    }),
    new CopyWebPackPlugin({
      patterns: [
        {from: "./src/images", to:'images'}
      ]
    })
  ]
}


// new CopyWebPackPlugin({
//   patterns: [
//     {from: "./src/styles", to:'css'},
//     {from: "./src/js", to:'js'},
//   ]
// })
