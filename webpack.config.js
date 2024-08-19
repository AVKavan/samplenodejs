const path = require("path");
module.exports = {
  // Entry point for our application
  entry: "./index",
  // Output file and directory
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  // Module rules for loading different file types
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  target: "node",
  externals: {
    fs: "commonjs fs",
    buffer: "commonjs buffer",
    string_decoder: "commonjs string_decoder",
    querystring: "commonjs querystring",
    http: "commonjs http",
    net: "commonjs net",
    zlib: "commonjs zlib",
    crypto: "commonjs crypto",
  },
};
