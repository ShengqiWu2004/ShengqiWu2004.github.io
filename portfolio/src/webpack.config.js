const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', // Adjust the path as needed
        }),
    ],
};
