// config file for webpack

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    'public/auth': path.join(__dirname, 'src', 'client', 'index.tsx'),
    'private/visualizer': path.join(__dirname, 'src', 'client', 'visual.tsx')
  },
  output: {
    filename: '[name].bundle.js'
  },
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript'
            ]
          }
        }
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader'
        }
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/client/index.html',
      filename: 'public/index.html',
      inject: true,
      chunks: ['public/auth']
    }),
    new HtmlWebpackPlugin({
      template: './src/client/index.html',
      filename: 'private/visualizer.html',
      inject: true,
      chunks: ['private/visualizer']
    })
  ],
  resolve: {
    extensions: ['.*', '.ts', '.tsx', '.js', '.jsx']
  },
  devServer: {
    port: 8080,
    proxy: {
      '/': 'http://localhost:3000'
    }
  }
};
