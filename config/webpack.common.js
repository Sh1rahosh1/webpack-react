const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: '[name].bundle.[hash].js',
        path: path.resolve(__dirname, '../dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Output Management',
            template: './index.html'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.ts(x?)|js(x?)$/,
                exclude: /node_modules/,
                use: [{
                    loader: "babel-loader",
                }, {
                    loader: 'ts-loader'
                }]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            },
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', 'jsx'],
    },
};