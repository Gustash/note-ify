module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/, 
                loader: 'babel-loader',
                exclude: /(node_modules)/
            }
        ]
    },
    devServer: {
        inline: true,
        contentBase: __dirname + '/public',
        port: 3000
    }
}