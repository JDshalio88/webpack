const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

const extractSass = new ExtractTextPlugin({
    filename: "styles.css", //"[name].[content].css"
    disable: process.env.NODE_ENV === "development"
});

const extractLess = new ExtractTextPlugin({
    filename: 'styles.css',
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules:[
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: "css-loader",
                        options: {
                            importLoaders: 1
                        }
                    },{
                        loader: "postcss-loader",
                        // options: {
                        //     plugins: () => [autoprefixer()]
                        // }
                    }]
                })
                // use:[
                //     'style-loader',
                //     'css-loader'
                // ]
            },
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    use:[
                        {
                            loader: "css-loader"
                        },
                        {
                            loader: "sass-loader"
                        }
                    ],
                    fallback: 'style-loader'
                })
            },
            // {
            //     test: /\.scss$/,
            //     use:[{
            //             loader: "style-loader"
            //         },
            //         {
            //             loader: 'css-loader'
            //         },
            //         {
            //             loader: "sass-loader" //将sass编译为 css
            //         }
            //     ]
            // }
            {
                test: /\.less$/,
                use: extractLess.extract({
                    use:[
                        {
                            loader: "css-loader"
                        },{
                            loader: "less-loader"
                        }
                    ],
                    fallback: "style-loader"
                })
            }
        ]
    },
    plugins:[
        extractSass,
        extractLess
    ]
}