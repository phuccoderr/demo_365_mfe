const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintWebpackPlugin = require("eslint-webpack-plugin");
const webpack = require("webpack");
const { ModuleFederationPlugin } = webpack.container;

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src", "index.tsx"),
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js",
  },
  devtool: "cheap-module-source-map",
  devServer: {
    port: 3000,
    open: true,
    historyApiFallback: true,
    static: {
      directory: path.resolve(__dirname, ".dist"),
    },
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                ["@babel/preset-env", { targets: "defaults" }],
                "@babel/preset-react",
                "@babel/preset-typescript",
              ],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: "asset/inline",
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
    }),
    new ModuleFederationPlugin({
      name: "MFHost",
      filename: "remoteEntry.js",
      remotes: {
        Components: "commonComponents@http://localhost:3001/remoteEntry.js",
        About: "aboutPage@http://localhost:3002/remoteEntry.js",
        Store: "storeState@http://localhost:3003/remoteEntry.js",
      },
      shared: {
        react: {
          singleton: true,
          eager: true, // Đảm bảo tiêu thụ ngay lập tức
        },
        "react-dom": {
          singleton: true,
          eager: true,
        },
        zustand: {
          singleton: true,
          eager: true,
          requiredVersion: "5.0.3",
        },
      },
    }),
  ],
};
