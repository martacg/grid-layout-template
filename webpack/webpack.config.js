const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require("autoprefixer");

module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname, "../"),
    filename: "assets/js/main.js",
  },
  devServer: {
    port: 4000,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    autoprefixer,
                    {
                      browsers: "last 2 versions",
                    },
                  ],
                ],
              },
            },
          },
          "sass-loader",
        ],
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "assets/css/style.css",
    }),
  ],
};