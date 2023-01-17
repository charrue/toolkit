import { test, expect } from "vitest";
import { toDisplayString } from "./index";

test("toDisplayString", () => {
  expect(toDisplayString("foo")).toBe("foo");
  expect(toDisplayString(1)).toBe("1");
  expect(toDisplayString(true)).toBe("true");
  expect(toDisplayString(false)).toBe("false");
  expect(toDisplayString(null)).toBe("");
  expect(toDisplayString(undefined)).toBe("");
  expect(toDisplayString({ a: 1 })).toBe(JSON.stringify({ a: 1 }, null, 2));
});
