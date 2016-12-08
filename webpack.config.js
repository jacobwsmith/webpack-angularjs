const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
    console.log('env: ', env);
    return {
        context: resolve('src'),
        entry: {
            "app": "./app/app.module.js"
        },
        output: {
            path: resolve('htdocs'),
            filename: "bundle.js"
        },
        bail: env.prod,
        module: {
            loaders: [
                {
                    test: /\.(scss|css)$/,
                    loaders: ["style-loader", "css-loader?sourceMap", "sass-loader?sourceMap"]
                },
                {
                    test: /\.js$/,
                    exclude: /(node_modules|htdocs)/,
                    loaders: ['ng-annotate-loader','babel-loader?presets[]=es2015']
                },
                {
                    test: /\.html$/,
                    exclude: /(node_modules|htdocs)/,
                    loader: 'raw-loader',
                },
                {
                    test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                    loader: "url-loader?limit=10000&mimetype=application/font-woff"
                },
                {
                    test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                    loader: "file-loader"
                },
                {
                    test: /\.(png|jpg|jpeg|gif)$/,
                    // loader: "url-loader?mimetype=image/png" // Note the mimetype
                    loader: "file-loader"
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: 'index.html',
                hash: true
            })
        ]
        // NOTE: add this to the package.json cuz it seems more reliable
        // also hot module reloading HMR not working. 
        // Documention: http://webpack.github.io/docs/webpack-dev-server.html
        // HMR Bugs: https://github.com/webpack/webpack/issues/1151
        // ,
        // devServer: {
        //     port: 8080,
        //     historyApiFallback: true,
        //     hot: true,
        //     inline: true,
        //     contentBase: 'htdocs'
        // }
    }
};