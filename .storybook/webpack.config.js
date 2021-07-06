const path = require('path');
const LWCWebpackPlugin = require('lwc-webpack-plugin')

module.exports = async ({ config, mode }) => {
    config.plugins.push(
        new LWCWebpackPlugin({
            modules: [
                {
                  name: 'c/avatar',
                  path: '/home/garrick/local/dcx/dev/lwc-storybook-poc-engine-dom/src/c/avatar/avatar.js'
                }
            ]
        })
    );
    config.module.rules = [{
        test: /\.stories\.js$/,
        loaders: [require.resolve('@storybook/source-loader')],
        enforce: 'pre',
    },
    {
        test: /\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/,
        loader: 'file-loader/dist/cjs.js',
        query: { name: 'static/media/[name].[hash:8].[ext]' }
    }];
    
    return config;
};
