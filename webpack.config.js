const path = require('path');
const config = require('./config.json');

module.exports = {
	entry: ["babel-polyfill", path.resolve(__dirname, 'src', 'web', 'index.jsx')],
	output: {
		path: path.resolve(__dirname, 'src', 'web'),
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['.js', '.jsx'],
		alias: {
			components: path.resolve(__dirname, 'src', 'web', 'components'),
			styles: path.resolve(__dirname, 'src', 'web', 'styles')
		}
	},
	devServer: {
		contentBase: path.join(__dirname, 'src', 'web'),
		publicPath: '/',
		filename: 'bundle.js',
		port: 8081,
		index: 'index.html'
	},
	module: {
		rules: [
			{
				test: /\.jsx$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react']
					}
				},
				exclude: '/node_modules/'
			},
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			}
		]
	}
};