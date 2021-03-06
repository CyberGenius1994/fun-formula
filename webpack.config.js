const path = require("path");

module.exports = {
    entry: {
        main: "./src/js/index.js",
        "service-page": "./src/js/pages/service-page.js",
        "article-page": "./src/js/pages/article-page.js",
        "articles-page": "./src/js/pages/articles-page.js",
        "product-page": "./src/js/pages/product-page.js",
        "about-page": "./src/js/pages/about-page.js",
    },

    output: {
        filename: "[name].js",
        chunkFilename: "[name].js",
        publicPath: "/"
    },

    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /node_modules/,
                    chunks: "initial",
                    name: "vendor",
                    enforce: true
                }
            }
        }
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    query: {
                        presets: [
                            ["@babel/preset-env", { modules: false }]
                        ]
                    }
                }
            }
        ]
    },

    resolve: {
        alias: {
            "%modules%": path.resolve(__dirname, "src/blocks/modules"),
            "%components%": path.resolve(__dirname, "src/blocks/components")
        }
    }
};
