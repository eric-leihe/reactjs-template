// webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack');
const path = require("path")

const defaultConfig = {
    entry: {
        app: './editor/index.js',
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react'],
                        cacheDirectory: true,
                        plugins: ['react-hot-loader/babel'],
                    }
                }, {
                    loader: 'react-hot-loader/webpack'
                }]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            sourceMap: false
                        }
                    },{
                        loader: 'css-loader'
                    }
                ]
            }
        ]
    },

    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: './dist/editor',
        hot: true
    },
    externals: {
        'react': {
          root: 'React',
          commonjs2: 'react',
          commonjs: 'react',
          amd: 'react',
          umd: 'react',
        },
        'react-dom': {
          root: 'ReactDOM',
          commonjs2: 'react-dom',
          commonjs: 'react-dom',
          amd: 'react-dom',
          umd: 'react-dom',
        },
        'prop-types': {
          root: 'PropTypes',
          commonjs2: 'prop-types',
          commonjs: 'prop-types',
          amd: 'prop-types',
          umd: 'prop-types',
        }
    },
    plugins: [
        new CleanWebpackPlugin('./dist/editor'),
        new HtmlWebpackPlugin({
            title: 'My Reactjs APP',
            inject: false,
            template: require('html-webpack-template'),
            appMountId: 'root',
            scripts: [
                {
                    src: '/assets/js/inject.js',
                    type: 'text/javascript'
                },
                {
                    src: "https://unpkg.com/react@16/umd/react.development.js",
                    type: 'text/javascript',
                    crossorigin: true
                },
                {
                    src: "https://unpkg.com/react-dom@16/umd/react-dom.development.js",
                    type: 'text/javascript',
                    crossorigin: true
                },
                {
                    src: "https://cdnjs.cloudflare.com/ajax/libs/prop-types/15.7.2/prop-types.min.js",
                    type: 'text/javascript',
                    crossorigin: true
                },
                {
                    src: 'https://unpkg.com/@babel/standalone/babel.min.js',
                    type: 'text/javascript',
                    "data-presets": '@babel/preset-react' 
                },
                {
                    src: '/assets/js/backend.js',
                    type: 'text/javascript'
                },
                {
                    src: '/assets/js/contentScript.js',
                    type: 'text/javascript'
                }
            ],
            links: [
                {
                    href: "https://use.fontawesome.com/releases/v5.8.1/css/all.css",
                    rel: "stylesheet",
                    integrity: "sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf",
                    crossorigin: "anonymous"
                }
            ]
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],

    output: {
        path: path.resolve(__dirname, "dist/editor"),
        filename: '[name].bundle.js',
        libraryTarget: 'umd',
        publicPath: '/editor',
    },

    optimization: {
        splitChunks: {
            // include all types of chunks
            chunks: 'all'
        }
    }
}

module.exports = (env, argv) => {
    console.log(env)
    const config = require(`./webpack.${argv && argv.mode || "development"}.config.js`)
    return Object.assign(defaultConfig, config)
}