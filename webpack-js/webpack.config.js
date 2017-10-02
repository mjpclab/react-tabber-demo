const webpack = require('webpack');
const path = require('path');

module.exports = [{
	entry: './src/js/main.jsx',
	output: {
		libraryTarget: 'umd',
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader'}
		]
	},
	plugins: [
		/*new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		})*/
	]
}, {
	entry: './src/js/with-css.jsx',
	output: {
		libraryTarget: 'umd',
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle-with-css.js'
	},
	module: {
		rules: [
			{test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader'},
			{test: /\.css$/, use: ['style-loader', 'css-loader']}
		]
	},
	plugins: [
		/*new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		})*/
	]
}];