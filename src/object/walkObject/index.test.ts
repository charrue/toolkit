import { test, expect, describe } from "vitest";
import { walkObject } from "./index";

describe("walkObject", () => {
  const obj1 = {
    foo: {
      name: "foo",
      age: 10,
    },
    bar: [1, { baz: 2 }, 3],
  };
  test("predicate option: key", () => {
    const keys: Array<string | number> = [];
    walkObject(obj1, ({ key }) => {
      keys.push(key);
    });

    expect(keys).toEqual(["foo", "name", "age", "bar", 0, 1, "baz", 2]);
  });

  test("predicate option: value", () => {
    let num = 0;
    walkObject(obj1, ({ value }) => {
      if (typeof value === "number") {
        num += value;
      }
    });

    expect(num).toBe(16);
  });

  test("predicate option: path", () => {
    let maxLenPath: Array<string | number> = [];
    walkObject(obj1, ({ path }) => {
      if (path.length > maxLenPath.length) {
        maxLenPath = path;
      }
    });

    expect(maxLenPath).toEqual(["bar", 1, "baz"]);
  });

  test("predicate option: isLeaf", () => {
    const leafs: Array<string | number> = [];
    walkObject(obj1, ({ key, isLeaf }) => {
      if (isLeaf) {
        leafs.push(key);
      }
    });

    expect(leafs).toEqual(["name", "age", 0, "baz", 2]);
  });
});
