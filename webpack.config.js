const webpack = require('webpack');
const path = require('path');

module.exports = {
   devtool: "inline-source-map",
   entry: [
      "webpack-dev-server/client?http://127.0.0.1:8080/",
      "webpack/hot/only-dev-server",
      "./src"
   ],
   output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js'
   },
   module: {
      loaders:[
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loaders: ['react-hot-loader','babel-loader?presets[]=react,presets[]=es2015']
         }
      ]
   },
   plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin()
   ]
}