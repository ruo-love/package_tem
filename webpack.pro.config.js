const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    mode: "development",
    entry: path.join(__dirname, './src/package/index.ts'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].js',
        clean: true,
        library: {
            name: '@zrcode/jstool',
            type: 'umd',
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html',
        }),
    ],
    resolve: {
        extensions: ['.js', '.ts',],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader"
                    },
                    {
                        loader: 'ts-loader',
                    }
                ]
            }
        ]
    }
}