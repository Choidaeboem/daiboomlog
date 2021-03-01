const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
  context: __dirname,
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.ts|\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
      },
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: require.resolve('sass-loader'),
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(png|j?g|svg|gif)?$/,
        use: 'file-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'build'),
    compress: true,
    port: 9000,
  },

  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'build'),
    // publicPath: '/',
  },
  plugins: [
    new CleanWebpackPlugin({cleanStaleWebpackAssets: false}),
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      filename: 'index.html',
    }),
  ],
}
