module.exports = {
    entry: './src/app.js',
    output: {
        path: __dirname,
        filename: './app.min.js',
    },
    module: {
        loaders: []
    },
     plugins: []
};
