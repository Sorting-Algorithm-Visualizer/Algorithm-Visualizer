// config file for webpack

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: path.join(__dirname, 'src', 'client', 'index.jsx'),
  output: {
    filename: 'bundle.js',
  },
  module: {
    rules: [
			{
				//JS and JSX
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react']
					}
				},
			},
			{
				test: /\.s[ac]ss$/i,
				use: ['style-loader', 'css-loader', 'sass-loader']
			},
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: './src/client/index.html'
    })
  ],
  resolve: {
    extensions: ['.*', '.js', '.jsx']
  }  
};

