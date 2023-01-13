import { has } from ".";
import { describe, expect, test } from "vitest";

describe("has", () => {
  test("string key", () => {
    const obj = {
      foo: 1,
    };
    expect(has(obj, "foo")).toBe(true);
    expect(has(obj, "bar")).toBe(false);
  });

  test("symbol key", () => {
    const key = Symbol("key");
    const obj = {
      [key]: 1,
    };

    expect(has(obj, key)).toBe(true);
  });
});
