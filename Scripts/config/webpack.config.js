﻿const path = require("path");

module.exports = {
    entry: {
        helloworld: "./Scripts/src/hello-world.js",
        parent: "./Scripts/src/parent.js"
    },
    output: {
        path: path.resolve(__dirname, "../../wwwroot/dist"),
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                use: {
                    loader: "babel-loader"
                },
                test: /\.js$/,
                exclude: /node_modules/ //excludes node_modules folder from being transpiled by babel. We do this because it's a waste of resources to do so.
            }
        ]
    }
}