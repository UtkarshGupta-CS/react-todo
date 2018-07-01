const webpack = require("webpack");
const path = require("path");

module.exports = {
  devtool: "inline-source-map",
  entry: ["./src"],
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        include: [path.resolve(__dirname, "./src")],
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["react", "es2015"],
              cacheDirectory: true,
              plugins: ["react-hot-loader/babel"]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  mode: "development"
};
