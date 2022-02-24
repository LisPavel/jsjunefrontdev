import styles from "rollup-plugin-styles";
import copy from "rollup-plugin-copy";
import { babel } from "@rollup/plugin-babel";

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
  ],
};
