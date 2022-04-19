const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'bundle'),
        filename: "bundle.js",
        publicPath: '/'
    },
    plugins: [new HtmlWebpackPlugin({
      template: './src/index.html',
    }),],
    module: {
        rules: [
          {
            test: /\.s[ac]ss$/i,
            use: [
              // Creates `style` nodes from JS strings
              "style-loader",
              // Translates CSS into CommonJS
              "css-loader",
              // Compiles Sass to CSS
              "sass-loader",
            ],
          },
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
            }
          },
        ],
      },
      devServer: {
        static:{ 
          directory: path.join(__dirname, 'bundle')},
        port: 8080
      },
};