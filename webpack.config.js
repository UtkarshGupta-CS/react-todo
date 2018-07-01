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
              presets: ["react", "es2015", "stage-2"],
              cacheDirectory: true,
              plugins: ["react-hot-loader/babel"]
            }
          }
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  mode: "development"
};
