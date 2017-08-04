const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const webpackBaseConfig = require('./webpack.base.config.js');

module.exports = merge(webpackBaseConfig, {
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/',
        filename: '[name].js',
        chunkFilename: '[name].chunk.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),

        new webpack.NoEmitOnErrorsPlugin(),
        new ExtractTextPlugin({
            filename: '[name].css',
            allChunks: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors',
            filename: 'vendors.js'
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html',
            inject: true
        }),
        new FriendlyErrorsPlugin()
    ],
    devtool: '#cheap-module-eval-source-map',
    devServer: {
        contentBase: './',
        publicPath: '/',
        historyApiFallback: true,
        host: "0.0.0.0",
        disableHostCheck: true,
        hot: true,
        inline: true,
        port: 8080,
        proxy: {
            '/api/*': {
                target: 'http://localhost:3000',  //线上环境
                secure: false,  //https，设置false
                changeOrigin: true
            }
        }
    },
});