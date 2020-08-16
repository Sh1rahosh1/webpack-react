const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(common,
    {
        mode: "production",
        module: {
            rules: [
                {
                    test: /\.(sass|scss|css)$/,
                    use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../'
                        }
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader'
                    }, {
                        loader: 'sass-loader'
                    }
                    ]
                },
            ]
        },
        plugins: [
            new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
            new MiniCssExtractPlugin({
                filename: "[name].[hash:7].css",
            }),
            new BundleAnalyzerPlugin({
                openAnalyzer: true
            }),
        ]
    }
)