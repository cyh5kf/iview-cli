var path = require('path'),
    webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    merge = require('webpack-merge'),
    FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin'),
    webpackBaseConfig = require('./webpack.config.base.js'),
    serverConfig = require('./serverConfig');


module.exports = merge(webpackBaseConfig, {
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/',
        filename: '[name].js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),

        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development')
            }
        }),

        new ExtractTextPlugin({
            filename: '[name].css',
            allChunks: true
        }),

        new FriendlyErrorsPlugin(),

        new webpack.LoaderOptionsPlugin({
            debug: true
        })
    ],
    devtool: '#cheap-module-eval-source-map',
    cache: true,
    devServer: {
        contentBase: './',
        publicPath: '/',
        historyApiFallback: true,
        host: "0.0.0.0",
        disableHostCheck: true,
        hot: true,
        inline: true,
        port: serverConfig.port,
        proxy: {
            '/api/*': {
                target: 'http://localhost:3000',  //线上环境
                secure: false,  //https，设置false
                changeOrigin: true,
                pathRewrite: {'^/api/': ''}
            }
        }
    },
});