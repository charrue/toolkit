import { test, expect } from "vitest";
import { capitalize } from "./index";

test("camelize", () => {
  expect(capitalize("foo")).toBe("Foo");
});
