const path = require('path');
//const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	module: {
	    rules: [
	      	{
	        	test: /\.ejs$/,
	        	use: ['ejs-webpack-loader']
	    	}
		]
	}
}