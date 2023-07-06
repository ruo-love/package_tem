const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = function (env) {
    console.log('-----------', env)
    return {
        mode: "development",
        entry: {
            main: {
                import: path.join(__dirname, './src/main.ts'),

            },
        },
        output: {
            path: path.join(__dirname, './dist'),
            filename: '[name].js',

        },
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src/'),
                '@package': path.resolve(__dirname, 'src/package/'),
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
}