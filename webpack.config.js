var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');
var glob = require("glob");

module.exports = {
    devServer: {
        contentBase: "./src", 
        inline: true 
    },
    entry: glob.sync("./src/app/**/*.js"), //'./src/app/app.js',
    output: {
        path: path.resolve(__dirname, 'wwwroot'),
        publicPath: "",
        filename: 'dist/app.bundle.js'
    },
    module: {
        rules: [
            { test: /src.*\.js$/, exclude: /node_modules/, use: [{ loader: "babel-loader" }] },
            { test: /src.*\.html$/, exclude: /node_modules/, use: [{ loader: 'raw-loader' }] },
            { test: /src.*\.scss$/, use: [{ loader: "style-loader" }, { loader: "css-loader" }, { loader: "sass-loader" }] }
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
            { from: 'node_modules/angular-animate/angular-animate.min.js', to: 'lib/' },
            { from: 'node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js', to: 'lib/' },

            { from: 'node_modules/bootstrap/dist/css/bootstrap.min.css', to: 'lib/' },
            { from: 'node_modules/bootstrap/dist/js/bootstrap.min.js', to: 'lib/' },
            { from: 'node_modules/bootstrap/dist/fonts/', to: 'fonts/' },
            { from: 'node_modules/jquery/dist/jquery.min.js', to: 'lib/' },
            { from: 'node_modules/toastr/build/toastr.min.js', to: 'lib/' },
            { from: 'node_modules/toastr/build/toastr.min.css', to: 'lib/' },
            // Gridstack
            { from: 'src/lib/', to: 'lib/' },
            { from: 'node_modules/lodash/lodash.min.js', to: 'lib/' },
            { from: 'node_modules/gridstack/dist/gridstack.min.css', to: 'lib/' },
            { from: 'node_modules/gridstack/dist/gridstack-extra.min.css', to: 'lib/' },
            //{ from: 'node_modules/gridstack/dist/gridstack.min.js', to: 'lib/' },
            //{ from: 'src/lib/gridstack-angular/gridstack-angular.min.js', to: 'lib/' },

            // Process angular app views.
            //{ context: 'src/app', from: '**/*.html', to: 'app/' },
        ], { copyUnmodified: true })
    ]
};