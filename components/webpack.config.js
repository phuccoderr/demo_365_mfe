const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src", "index.tsx"),
  output: {
    path: path.resolve(__dirname, ".dist"),
    filename: "bundle.js",
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, ".dist"),
    },
    open: true,
    port: 3001,
    historyApiFallback: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "commonComponents",
      filename: "remoteEntry.js",
      exposes: {
        "./Header": "/src/components/Header.tsx",
        "./Footer": "/src/components/Footer.tsx",
      },
      shared: {
        react: {
          singleton: true,
          eager: true, // Đảm bảo tiêu thụ ngay lập tức
          requiredVersion: "19.0.0",
        },
        "react-dom": {
          singleton: true,
          eager: true,
          requiredVersion: "19.0.0",
        },
      },
    }),
  ],
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
    ],
  },
};
