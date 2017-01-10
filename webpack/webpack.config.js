module.exports = {
    entry: './src/index.jsx',
    output: {
        path: '../dist',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            // Processing JS with Babel
            { 
                test: /\.(js|jsx)$/, 
                exclude: /node_modules/, 
                loader: 'babel-loader?presets[]=2015&presets[]=react'
            },
            {
                test: /\.scss$/,
                loaders: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.css$/,
                loader: 'style!css?importLoaders=1!postcss'
            }
        ]
    }
};