const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
    entry: "./src/index.tsx",
    output: {
        path: path.join(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            contentBaseimportLoaders: 1,
                            localIdentName: "[name]_[local]_[hash:base64]",
                            sourceMap: true,
                            minimize: true
                        }
                    },
                    {
                        loader: "postcss-loader"
                    }
                ]
            },
            {
                test: /\.(jpg|png|gif|svg)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            name: '../images/[name].[ext]',
                            limit: 8192
                        }
                    }
                ]
            },
            {
                test: /\.(jpg|png|gif|svg|ttf|eot|woff|woff2)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'fonts/[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ]
};