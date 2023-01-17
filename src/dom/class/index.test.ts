import { describe, test, expect } from "vitest";
import { clz } from "./index";

describe("class", () => {
  test("clz", () => {
    expect(clz("foo", ["bar"], {
      baz: true,
    })).toBe("foo bar baz");
  });
});
