const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const modeConfig = env => require(`./webpack-configs/${env.mode}.js`)(env);

module.exports = env => {
    return webpackMerge(
        {
            mode: env.mode,
            entry: {
                app: './assets/js/app/app.js',
                admin: './assets/js/admin/admin.js',
            },
            output: {
                filename: '[name].js',
                path: path.resolve(__dirname, 'public/js/'),
                chunkFilename: '[name].[contenthash].js',
            },
            module: {
                rules: [
                    { test: /\.js$/, exclude: /(node_modules)/, loader: ['babel-loader'] },
                    {
                        test: /\.vue$/,
                        exclude: /(node_modules)/,
                        loader: 'vue-loader',
                        options: {
                            loaders: {
                                scss: 'vue-style-loader!css-loader!sass-loader',
                                css: 'vue-style-loader!css-loader',
                            },
                        },
                    },
                ],
            },
            resolve: { extensions: ['.js'], alias: { vue$: 'vue/dist/vue.esm.js' } },
            plugins: [new webpack.ProgressPlugin(), new VueLoaderPlugin()],
        },
        modeConfig(env),
    );
};