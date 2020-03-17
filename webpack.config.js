const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Vendor = ['react', 'react-dom'];
module.exports = {
  entry:{
    App: ["./src/App.js"],
    vendor: Vendor, // dùng vendor thì phải config CommonsChunkPlugin  nếu không sẽ bị duplicate dependences
  } 
  ,
  module: {
    rules:[
      {
        use: {
          loader: 'babel-loader',
        },
      test: /\.(ts|js)x?$/,
      exclude: /node_modules/,
      resolve: {
        extensions: ['.ts', '.tsx','.jsx', '.js']
    },
  }
  ,{
      test: /\.s[ac]ss$/i,
      use: [
          'style-loader',
          'css-loader', 
          'sass-loader'
      ]
  }
  ,{
    loader: "file-loader",
    test:/\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.woff2$|\.eot$|\.wav$|\.ttf$|\.mp3$|\.ico$/
},
{
    type: 'javascript/auto',
      test: /\.json/,
      exclude: /(node_modules)/,
      use: [{
        loader: 'json-loader',
        //options: { name: '[name].[ext]' },
      }],
    }
  
]
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "public"),
   // publicPath: 'http://localhost:9090/public/'
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  devtool: "cheap-module-source-map",
  devServer: {
    contentBase: "./public",
    historyApiFallback: true,
    hot: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
  }),
  ]
};