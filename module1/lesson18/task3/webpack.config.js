const path = require("path");

const targetDir = path.resolve(__dirname, "dist");
const srcDir = path.resolve(__dirname, "src");
const mode = "development";

module.exports = {
  mode,
  entry: path.resolve(srcDir, "index.js"),
  output: {
    filename: "index.js",
    path: targetDir,
    clean: true,
  },
};
