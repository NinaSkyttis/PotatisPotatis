// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    // entry: './src/client/index.jsx',
    
    // adding react-hot-loader to entry since I initially had to rebundle my app when I made a filename change. This might resolve the issue.
    entry: './src/index.js',

    output: {
        path: path.join(__dirname, '/dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],

    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                secure: false,
            }
            // this was my initial setup. Changing /** to '/api'. Might change back later. */
            // '/**': {
            //     target: 'http://localhost:3000/',
            //     secure: false,
            // }
        }
    },

    module: {
        rules: [
            {
                test: /.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                        }
                    }
                ]
            }

        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
}