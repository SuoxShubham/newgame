const port = process.env.PORT || 8080;
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, "src"),
        filename: "bundle.js"
    },
    module:{
        rules: [
            {test: /.jsx?$/, loader:'babel-loader', exclude: /node-modules/},
            { test: /\.css$/,
                use: ['style-loader', 'css-loader']}
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}