var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');
var glob = require("glob");

module.exports = {
    devServer: {
        contentBase: "wwwroot", 
        inline: true 
    },
    entry: glob.sync("./src/app/**/*.js"), //'./src/app/app.js',
    output: {
        path: './wwwroot',
        publicPath: "",
        filename: 'dist/app.bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader:"babel" },
            { test: /\.html$/, loader: 'raw', exclude: /node_modules/ },
            { test: /\.scss$/, loaders: ["style", "css", "sass"] }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Angular Webpack Skeleton',
            template: 'src/app/index.html',
            filename: 'index.html',
            //  minify: {
            //     collapseWhitespace: true,
            //     removeComments: true,
            //     removeRedundantAttributes: true,
            //     removeScriptTypeAttributes: true,
            //     removeStyleLinkTypeAttributes: true
            // }
        }),
        new CopyWebpackPlugin([

            // Copy vendor libraries/dependencies to the wwwroot/lib/ folder.
            { from: 'node_modules/angular/angular.min.js', to: 'lib/' },
            { from: 'node_modules/angular-route/angular-route.min.js', to: 'lib/' },
            { from: 'node_modules/bootstrap/dist/css/bootstrap.min.css', to: 'lib/' },
            { from: 'node_modules/bootstrap/dist/js/bootstrap.min.js', to: 'lib/' },
            { from: 'node_modules/jquery/dist/jquery.min.js', to: 'lib/' },

            // Process angular app views.
            //{ context: 'src/app', from: '**/*.html', to: 'app/' },
        ],
        {
            copyUnmodified: true
        })
    ]
};