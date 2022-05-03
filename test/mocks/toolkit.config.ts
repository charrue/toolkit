import { defineConfig, languages } from "./defineConfig";
import cloneDeep from "lodash.clonedeep";

export default defineConfig({
  build: {
    esm: false,
    ext: languages[0],
    dependencies: cloneDeep(["esbuild"]),
  }
})