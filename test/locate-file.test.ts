import { describe, it, expect } from "vitest";
import { resolve } from "path";
import { locatePath } from "../src/node/locate-file";

describe("locate-file", () => {
  it("locatePath matched file", () => {
    const filePath1 = locatePath(["./array.test.ts", "./array2.test.ts"], {
      cwd: __dirname,
    });
    expect(filePath1).toBe("./array.test.ts");

    const filePath2 = locatePath(["src", "logger"], {
      cwd: resolve(__dirname, "../src"),
    });
    expect(filePath2).toBe(undefined);
  });

  it("locatePath matched directory", () => {
    const filePath2 = locatePath(["src", "logger"], {
      cwd: resolve(__dirname, "../src"),
      type: "directory",
    });
    expect(filePath2).toBe("logger");
  });

  it("locatePath get all matched files", () => {
    const filePath1 = locatePath([
      "./array.test.ts",
      "./string.test.ts",
      "./array2.test.ts",
    ], {
      cwd: __dirname,
      getAllMatched: true,
    });
    expect(filePath1).toEqual(["./array.test.ts", "./string.test.ts"]);
  });

  it("locatePath get matched absolute file", () => {
    const filePath1 = locatePath([
      "./array.test.ts",
      "./string.test.ts",
      "./array2.test.ts",
    ], {
      cwd: __dirname,
      getAllMatched: true,
      absolute: true,
    });
    expect(filePath1).toEqual(["./array.test.ts", "./string.test.ts"].map((t) => resolve(__dirname, t)));
  });
});
