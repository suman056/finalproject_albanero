const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  output: {
    path: path.join(__dirname, "/dist"), // the bundle output path
    filename: "bundle.js", // the name of the bundle
    publicPath:"/"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html", 
      inject:true,// to import index.html file inside index.js
      title:"project"
    }),
  ],
  devServer: {
    port: 3030, // you can change the port
    // historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // .js and .jsx files
        exclude: /node_modules/, // excluding the node_modules folder
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(sa|sc|c)ss$/, // styles files
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/, // to import images and 
        dependency: { not: ['url'] },
        use: [
          {
            loader: 'file-loader',
          },
        ],

       
        type: 'asset/resource'
      },
    ],
  },
  
};