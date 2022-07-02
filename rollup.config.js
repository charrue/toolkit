import path from "path";
import rimraf from "rimraf";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonJs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import pkg from "./package.json";

const input = path.resolve(__dirname, "./src/index.ts");
const getOutput = (filename) => path.resolve(__dirname, "./dist", filename);

const plugins = [
  typescript({
    include: ["src/**/*.ts"],
    exclude: ["/__tests__/**/*"],
    sourceMap: false,
    declaration: true,
    declarationDir: path.resolve(__dirname, "dist"),
  }),
  nodeResolve({ preferBuiltins: true }),
  commonJs(),
]

const rollupConfigs = {
  cjs: {
    module: "CommonJS",
    format: "cjs",
    ext: "js",
  },
  esm: {
    module: "ESNext",
    format: "esm",
    ext: "mjs",
  },
};

const external = Object.keys(pkg.dependencies);

const bundleConfig = Object.entries(rollupConfigs).map(([mod, moduleConfig]) => {
  return {
    input,
    output: {
      dir: path.resolve(__dirname, "dist"),
      format: mod,
      exports: module === "cjs" ? "named" : undefined,
      entryFileNames: `[name].${moduleConfig.ext}`,
    },
    external,
    plugins,
  };
});

const minifyConfig =   {
  input,
  output: {
    file: getOutput("index.iife.min.js"),
    name: "CharrueToolkit",
    format: "iife",
    extend: true,
  },
  plugins: [...plugins, terser()],
}

const config = bundleConfig.concat(minifyConfig);

rimraf.sync("./dist");
export default config;
