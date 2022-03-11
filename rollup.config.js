import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import pkg from "./package.json";

export default [
  // browser-friendly UMD build
  {
    input: "src/index.ts",
    output: {
      name: "pixiGraphPaper",
      file: pkg.browser,
      format: "umd",
      globals: { "pixi.js": "PIXI" },
    },
    external: ["pixi.js"],
    plugins: [
      resolve(), // so Rollup can find `ms`
      commonjs(), // so Rollup can convert `ms` to an ES module
      typescript({ tsconfig: "./tsconfig.json" }),
    ],
  },

  // CommonJS (for Node) and ES module (for bundlers) build.
  {
    input: "src/index.ts",
    output: [
      { file: pkg.main, format: "cjs" },
      { file: pkg.module, format: "es" },
    ],
    external: ["pixi.js"],
    plugins: [typescript({ tsconfig: "./tsconfig.json" })],
  },
];
