const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const APP_DIR = path.resolve(__dirname, './src');
const BUILD_DIR = path.resolve(__dirname, './dist')

const configuration = {
	entry: path.join(APP_DIR, '/index.js'),
	mode: 'development',
	output: {
        path: BUILD_DIR,
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader',
                resolve: {
                    extensions: ['.js', '.jsx']
                }
            },
        ],
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html'
        })
    ],
}

module.exports = configuration