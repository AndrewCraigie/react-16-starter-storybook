const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: "./src/index.js",
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                options: { presets: ['@babel/env'] },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader?url=false',
                    'resolve-url-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            },
            {
                test: /\.worker\.js$/,
                use: { loader: 'worker-loader' },
            },
            {
                test: /\.(ttf|eot|wof|woff2)$/,
                use: {
                    loader: 'file-loader'
                },
            },
            {
                test: /\.(jpg|PNG|png|)$/,
                use: {
                    loader: 'url-loader'
                },
            }
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        publicPath: '/dist/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'public/'),
        port: 8084,
        publicPath: 'http://localhost:8084/dist/',
        hotOnly: true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
};