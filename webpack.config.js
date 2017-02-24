'use strict';
var path = require('path');

let ExtractTextPlugin = require('extract-text-webpack-plugin');

let entry = {
  'main': path.join(__dirname, 'public', 'src', 'app', 'main.js'),
  'vendor': path.join(__dirname, 'public', 'src', 'app', 'vendor.js'),
  'style': path.join(__dirname, 'public', 'src', 'app', 'style.js'),
};

let commonPlugins = [
  new ExtractTextPlugin('style.bundle.css')
];

module.exports = {
    entry: entry,
    output: {
        path: path.join(__dirname, 'public', 'dist'),
        filename: '[name].bundle.js'
    },
    plugins: commonPlugins,
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /(node_modules)/,
                query: {
                    presets: ['latest', 'angular2']
                }
            },
            {
                test: /\.html$/,
                use: 'html-loader?attrs=false&caseSensitive&removeAttributeQuotes=false'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract(
                   'style-loader',
                   'css-loader'
                )
            }
        ]
    }
}