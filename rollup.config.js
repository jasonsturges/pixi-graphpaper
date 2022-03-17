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
      sourcemap: true,
      globals: { "pixi.js": "PIXI" },
    },
    external: ["pixi.js"],
    plugins: [
      resolve(), //
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
    ],
  },

  // CommonJS (for Node) and ES module (for bundlers) build.
  {
    input: "src/index.ts",
    output: [
      { file: pkg.main, format: "cjs", sourcemap: true },
      { file: pkg.module, format: "es", sourcemap: true },
    ],
    external: ["pixi.js"],
    plugins: [typescript({ tsconfig: "./tsconfig.json" })],
  },
];
