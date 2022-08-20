const {merge} = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFedarationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const packageJSON = require('../package.json');
const commonConfig = require('./webpack.common')

const devConfig = {
    mode:'development',
    devServer:{
        port:8081,
        historyApiFallback:{
            index:'index.html'
        }
    },
    plugins:[

        new ModuleFedarationPlugin({
            name:'marketing',
            filename:'remoteEntry.js',
            exposes:{
                './MarketingApp':'./src/bootstrap'
            },
             //shared:['react','react-dom'],
             shared:packageJSON.dependencies
        }),
        new HtmlWebpackPlugin({
            template:'./public/index.html'
        })
    ]
}

module.exports=merge(commonConfig,devConfig)