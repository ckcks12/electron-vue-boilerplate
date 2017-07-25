const path = require('path')
const webpack = require('webpack')

module.exports = {
	entry: {
		app: path.resolve(__dirname, 'front/main.js')
	},
	output: {
		path: path.resolve(__dirname, 'front/dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{test: /\.vue$/, loader: 'vue-loader'},
			{test: /\.(png|jpe?g|gif|svg)(\?.*)?/, loader: 'url-loader'},
			{test: /\.(mp4|webm|ogg|mp4|wav|flac|acc)(\?.*)?$/, loader: 'url-loader'},
			{test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/, loader: 'url-loader'},
			{test: /\.(scss|sass|css)$/, loader: 'style-loader!css-loader!sass-loader'}
		]
	},
	resolve: {
		alias: {
			vue: 'vue/dist/vue.js' // for compiler included Vue
		}
	},
	plugins: [
		// new webpack.DefinePlugin({'process.env': {NODE_ENV: '"production"'}}) // for production level Vue
	]
}