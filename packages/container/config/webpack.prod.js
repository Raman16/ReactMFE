const {merge} = require('webpack-merge')
const ModuleFedarationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common')
const packageJSON = require('../package.json')

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
    mode:'production', //js files will get optimized
    output:{
        filename:'[name].[contenthash].js',
        publicPath:'/container/latest/'
    },
    plugins:[
        new ModuleFedarationPlugin({
            name:'container', //host module[not neccessary to name]
            remotes:{
                marketing:`marketing@${domain}/marketing/latest/remoteEntry.js`,

            },
            shared:packageJSON.dependencies
        })
    ]
}
module.exports=merge(commonConfig,prodConfig)