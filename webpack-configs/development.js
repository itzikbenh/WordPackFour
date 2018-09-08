const webpack = require('webpack');

module.exports = () => ({
    output: {
        publicPath: 'http://localhost:8080/',
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
            },
        ],
    },
    devServer: {
        headers: { 'Access-Control-Allow-Origin': '*' },
        compress: true,
        quiet: true,
        hot: true,
        inline: true,
    },
    plugins: [new webpack.NamedModulesPlugin(), new webpack.HotModuleReplacementPlugin()],
});