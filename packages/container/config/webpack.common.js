module.exports = {
  module:{
      rules:[
          {
              test:/\.m?js$/,  //mjs or js should be processed by babel js
              exclude:/node_modules/,
              use:{ 
                  loader:'babel-loader',
                  options:{
                      presets:['@babel/preset-react','@babel/preset-env'],
                      plugins:['@babel/plugin-transform-runtime'],
                  }
              }
          }
      ]
  }
};
//@babel/preset-react -> babel is going to process all the different jsx tag in our code
//@babel/preset-env -> transforms es15,16,17,18,.... to ES5
//@babel/plugin-transform-runtime->helps to enable few additional features such async, await,...
