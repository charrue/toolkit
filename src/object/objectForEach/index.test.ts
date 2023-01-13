import { test, expect, describe } from "vitest";
import { objectForEach } from "./index";

describe("objectForEach", () => {
  test("string key", () => {
    const obj = {
      foo: 1,
      bar: 2,
    };

    const result: Record<string, number> = {};
    objectForEach(obj, (key, value) => {
      result[key] = value;
    });
    expect(result).toEqual({
      foo: 1,
      bar: 2,
    });
  });

  test("string and symbol key", () => {
    const KEY = Symbol("baz");
    const obj = {
      foo: 1,
      bar: 2,
      [KEY]: 3,
    };

    const result: Record<string, number> = {};
    objectForEach(
      obj,
      (key, value) => {
        result[key] = value;
      },
      true,
    );
    expect(result).toEqual({
      foo: 1,
      bar: 2,
      [KEY]: 3,
    });
  });
});
