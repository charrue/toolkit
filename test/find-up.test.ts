import { findUp, findUpMultiple } from "../src/node/find-up";
import { resolve } from "path";

describe("findUp", () => {
  it("find fist matched file", () => {
    const filepath = findUp(
      [
        "./array.test.ts",
        "./find-up.test.ts",
        "./array2.test.ts",
      ],
      {
        cwd: __dirname,
        stopAt: resolve(__dirname, "../"),
      },
    );
    expect(filepath).toBe(resolve(__dirname, "./array.test.ts"));
  });

  it("find all matched files", () => {
    const filepath = findUpMultiple(
      [
        "./array.test.ts",
        "./find-up.test.ts",
        "./array2.test.ts",
      ],
      {
        cwd: __dirname,
        stopAt: resolve(__dirname, "../"),
        getAllMatched: true,
      },
    );
    expect(filepath).toEqual([resolve(__dirname, "./array.test.ts"), resolve(__dirname, "./find-up.test.ts")]);
  });
});
