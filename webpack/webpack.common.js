const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "../src/index.tsx"),
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      pages: path.resolve(__dirname, "../src/pages/"),
      components: path.resolve(__dirname, "../src/components/"),
      enums: path.resolve(__dirname, "../src/enums/"),
      types: path.resolve(__dirname, "../src/types/"),
      store: path.resolve(__dirname, "../src/store/"),
      api: path.resolve(__dirname, "../src/api/"),
      data: path.resolve(__dirname, "../src/data/"),
      assets: path.resolve(__dirname, "../src/assets/"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "../build"),
    filename: "bundle.js",
    publicPath: "/",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../src/index.html"),
    }),
  ],
};
