const {merge} = require('webpack-merge')
const ModuleFedarationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const packageJSON = require('../package.json');
const commonConfig = require('./webpack.common')

const devConfig = {
    mode:'development',
    devServer:{
        port:8080,
        historyApiFallback:{
            index:'index.html'
        }
    },
    plugins:[

        new ModuleFedarationPlugin({
           name:'container',
           remotes:{
              marketing:'marketing@http://localhost:8081/remoteEntry.js'
           },
           //shared:['react','react-dom'],
           shared:packageJSON.dependencies
        }),
        
    ]
}

module.exports=merge(commonConfig,devConfig)