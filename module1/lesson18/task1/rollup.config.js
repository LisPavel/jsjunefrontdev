import styles from "rollup-plugin-styles";
import copy from "rollup-plugin-copy";
import { babel } from "@rollup/plugin-babel";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";

const targetDir = "dist";
const srcDir = "src";

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
    styles({
      mode: ["extract", "index.css"],
    }),

    copy({
      targets: [{ src: `${srcDir}/index.html`, dest: `${targetDir}` }],
    }),

    babel({ babelHelpers: "bundled" }),

    serve({ port: 3000, contentBase: "dist" }),

    livereload({ delay: 500, watch: "dist" }),
  ],
};
