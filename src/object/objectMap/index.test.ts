import { describe, test, expect } from "vitest";
import { objectMap } from "./index";
import { IterableKey } from "../type";

describe("objectMap", () => {
  const KEY = Symbol("KEY");

  const obj1 = {
    foo: 1,
    bar: 2,
    [KEY]: 3,
  };

  const fn = (key: IterableKey, value: any) => {
    return {
      [key]: value * 2,
    };
  };

  test("string key only", () => {
    const obj2 = objectMap(obj1, fn);
    expect(obj2).toEqual({
      foo: 2,
      bar: 4,
    });
  });

  test("get string & symbol key", () => {
    const obj3 = objectMap(obj1, fn, true);
    expect(obj3).toEqual({
      foo: 2,
      bar: 4,
      [KEY]: 6,
    });
  });

  test("filter not undefined", () => {
    const obj4 = objectMap(obj1, (key, value) => {
      if (value > 1) {
        return {
          [key]: value * 2,
        };
      }
      return undefined;
    });
    expect(obj4).toEqual({
      bar: 4,
    });
  });
});
