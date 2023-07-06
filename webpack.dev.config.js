const path = require("path")
module.exports = {
    mode: "development",
    entry: path.join(__dirname, './src/main.ts'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js',

    },
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