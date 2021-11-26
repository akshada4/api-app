const path = require('path');
const webpack = require('webpack');

const APP_DIR = path.resolve(__dirname, './src');
const BUILD_DIR = path.resolve(__dirname, './dist')

const configuration = {
	entry: path.join(APP_DIR, '/index.js'),
	mode: 'development',
	ouput: {
        path: BUILD_DIR,
        filename: 'bundle.js',
        publicPath: '/'
    },
    modules: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
        ],
    },
}

module.exports = configuration