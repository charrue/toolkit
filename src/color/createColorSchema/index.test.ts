import { createColorSchema } from "./index";
import { describe, test, expect } from "vitest";

describe("createColorSchema", () => {
  test("complementary", () => {
    const { complementary } = createColorSchema("#d52a33");

    expect(complementary?.()).toEqual(["#2ad5cc"]);
  });
});
