import path from 'path';
import { describe, expect, test } from 'vitest';
import { loadConfigFromFile } from '../src/node/load-config-file';

describe("loadConfigFile", () => {
  const mockConfigFile = path.resolve(__dirname, "./mocks/toolkit.config.ts")
  test("aa", async () => {

    await expect(
      loadConfigFromFile(mockConfigFile)
    )
      .resolves
      .toHaveProperty("config", {
        build: {
          esm: false,
          ext: "js",
          dependencies: ["esbuild"],
        }
      })
  })
})