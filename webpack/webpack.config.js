module.exports = {
    entry: "./src/index.jsx",
    output: {
        path: '../dist',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            // { test: /\.css$/, loader: "style!css" }
        ]
    }
};