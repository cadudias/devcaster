//var debug = process.env.NODE_ENV !== "production";
var path = require('path');
var webpack = require('webpack');
//console.log("desenv - process.env.NODE_ENV : " + process.env.NODE_ENV);
module.exports = {
    devtool: "eval",
    entry: [
        //"webpack-dev-server/client?http://localhost:1337",
        //"webpack/hot/dev-server",
        // app: [
            // "webpack-dev-server/client?http://localhost:1337/",
             // For hot style updates
            'webpack/hot/dev-server',
            
            // The script refreshing the browser on none hot updates
            'webpack-dev-server/client?http://localhost:8081',
            
            // Our application
            "./app/app.js"
        // ]
    ],
    output: {
        // We need to give Webpack a path. It does not actually need it,
        // because files are kept in memory in webpack-dev-server, but an
        // error will occur if nothing is specified. We use the buildPath
        // as that points to where the files will eventually be bundled
        // in production
        path: __dirname,
        filename: "bundle.js",
        
        // Everything related to Webpack should go through a build path,
        // localhost:3000/build. That makes proxying easier to handle
        publicPath: '/build/'
    },
    module: {
        loaders: [
            // I highly recommend using the babel-loader as it gives you
            // ES6/7 syntax and JSX transpiling out of the box
            //all the files that end in js use the babel loader wich is the es6 transpiler plugin
            //include: directory the loader will look at to transform the file
            { 
                test: /\.js$/, 
                loader: "babel",
                exclude: [path.resolve(__dirname, 'node_modules')]
                //include: path.join(__dirname, "src")
            }
            //{ test: /\.css$/, loader: "style!css" }
        ]
    },
    plugins: [
    // !debug [
    //      new webpack.DefinePlugin({
    //         'process.env': {
    //             'NODE_ENV': JSON.stringify('development')
    //         }
    //          //'process.env.NODE_ENV': JSON.stringify('development')
    //     })
    // ] ? [] : [
        // We have to manually add the Hot Replacement plugin when running
        // from Node
        // new webpack.DefinePlugin({
        //     'process.env':{
        //         'NODE_ENV': JSON.stringify('"production"')
        //     }
        // }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
        //new webpack.NoErrorPlugin()
   ]
};