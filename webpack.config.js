const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = env => {
  const isProduction = env === "production";

  return {
    entry: "./src/app.js",
    output: {
      path: path.join(__dirname, 'public', 'dist'),
      filename: "bundle.js"
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.s?css$/,
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: ["css-loader", "sass-loader"]
          })
        }
      ]
    },
    plugins: [new ExtractTextPlugin("styles.css")],
    devtool: isProduction ? "source-map" : "cheap-module-eval-source-map",
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      publicPath: '/dist/'
    }
  };
};
