const webpack = require("webpack");

module.exports = function override(config) {
    const fallback = config.resolve.fallback || {};
    Object.assign(fallback, {
        path: require.resolve("path-browserify"),
        os: false,
        crypto: require.resolve("crypto-browserify"),
        stream: require.resolve("stream-browserify"),
        querystring: require.resolve("querystring-es3"),
        url: require.resolve("url/"),
        process: require.resolve("process/browser"),
        buffer: require.resolve("buffer/"),
        vm: require.resolve("vm-browserify")
    });
    config.resolve.fallback = fallback;

    config.plugins = (config.plugins || []).concat([
        new webpack.ProvidePlugin({
            process: 'process/browser',
            Buffer: ['buffer', 'Buffer'],
        }),
    ]);

    return config;
};