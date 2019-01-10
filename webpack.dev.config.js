const path = require('path'),
  MiniCssExtractPlugin = require('mini-css-extract-plugin'),
  webpack = require('webpack'),
  HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  target: 'web',
  mode: 'development',
  devServer: {
    //match the output path
    contentBase: '/assets',
    //activate hot reloading
    hot: true,
    //match the output publicPath
    publicPath: '/',
    historyApiFallback: true,
    proxy: [{
      context: ['/content', '/api', '/assets'],
      target: 'http://0.0.0.0:3000'
    }]
  },
  entry: {
    server: ['./src/bundles/server.js'],
    client: ['./src/bundles/client.js']
  },
  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: '[name].js'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles/all.css'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.ejs',
      minify: {
        removeComments: true,
        collapseWhitespace: true
      },
      inject: true
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          // This is a feature of `babel-loader` for webpack (not Babel itself).
          // It enables caching results in ./node_modules/.cache/babel-loader/
          // directory for faster rebuilds.
          //cacheDirectory: true,
          plugins: ['react-hot-loader/babel']
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        include: [
          path.resolve(__dirname, 'assets/styles')
        ],
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.svg/,
        use: {
          loader: 'svg-url-loader',
          options: {}
        }
      },
      {
        test: /\.(jpe?g|png|gif|ico)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]'
            }
          }
        ]
      },
    ]
 }
}
