import { test, expect } from "vitest";
import { camelize } from "./index";

test("camelize", () => {
  expect(camelize("foo-bar")).toBe("fooBar");
});
