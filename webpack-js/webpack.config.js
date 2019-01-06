const path = require('path');

module.exports = {
	mode: 'none',
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
	}
};
