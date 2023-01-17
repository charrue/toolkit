import { test, expect } from "vitest";
import { hyphenate } from "./index";

test("camelize", () => {
  expect(hyphenate("fooBar")).toBe("foo-bar");
});
