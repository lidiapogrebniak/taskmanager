'use strict';
var path = require('path');

let entry = {
  'main': path.join(__dirname, 'public', 'src', 'app', 'main.js'),
  'vendor': path.join(__dirname, 'public', 'src', 'app', 'vendor.js'),
};

module.exports = {
    entry: entry,
    output: {
        path: path.join(__dirname, 'public', 'dist'),
        filename: '[name].bundle.js'
    },
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
            }
        ]
    }
}