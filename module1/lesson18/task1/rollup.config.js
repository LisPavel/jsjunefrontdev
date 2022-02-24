import styles from "rollup-plugin-styles";
import copy from "rollup-plugin-copy";
import { babel } from "@rollup/plugin-babel";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import image from "rollup-plugin-img";
import alias from "@rollup/plugin-alias";
import path from "path";

const targetDir = "dist";
const srcDir = "src";
const srcAssetsDir = path.resolve(__dirname, srcDir, "assets");

export default {
  input: `${srcDir}/index.js`,

  output: {
    dir: targetDir,
    format: "cjs",
    assetFileNames: "[name][extname]", //need this to extract styles without hash name
  },

  watch: {
    exclude: "node_modules/**",
  },

  plugins: [
    alias({
      entries: [{ find: "@assets", replacement: srcAssetsDir }],
    }),

    styles({
      mode: ["extract", "index.css"],
    }),

    image({
      output: `${targetDir}`,
      limit: 10000,
      exclude: "node_modules/**",
    }),

    copy({
      targets: [{ src: `${srcDir}/index.html`, dest: `${targetDir}` }],
    }),

    babel({ babelHelpers: "bundled" }),

    serve({ port: 3000, contentBase: targetDir }),

    livereload({ delay: 500, watch: targetDir }),
  ],
};
