var webpack = require('webpack');
var path = require('path');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var buildPath = path.resolve(__dirname, 'public', 'build');
var mainPath = path.resolve(__dirname, 'app', 'app.js');

//console.log("prod - process.env.NODE_ENV : " + process.env.NODE_ENV);

var config = {

    // We change to normal source mapping
    devtool: 'source-map',
    entry: mainPath,
    output: {
        path: buildPath,
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            exclude: [nodeModulesPath]
        },{
            test: /\.css$/,
            loader: 'style!css'
        }]
    }
    // plugins: [
    //     new webpack.DefinePlugin({
    //         // 'process.env': {
    //         //     'NODE_ENV': JSON.stringify('production')
    //         // },
    //          'process.env.NODE_ENV': JSON.stringify('production')
    //     })
    // ]
};

module.exports = config;