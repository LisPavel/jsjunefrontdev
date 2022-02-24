import styles from "rollup-plugin-styles";

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
  ],
};
