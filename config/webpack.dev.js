const { merge } = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common,
    {
        mode: 'development',
        module: {
            rules: [
                {
                    test: /\.(sass|scss|css)$/,
                    use: ['style-loader', 'css-loader', 'sass-loader']
                }
            ],
        },
        devtool: 'inline-source-map',
        devServer: {
            port: 3000,
            open: true,
            proxy: {
                "/test": {
                    target: "http://192.168.42.17:8080",
                    changeOrigin: true
                }
            }
        },
    }
)