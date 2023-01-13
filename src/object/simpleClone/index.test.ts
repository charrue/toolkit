import { describe, test, expect } from "vitest";
import { simpleClone } from "./index";

describe("simpleClone", () => {
  test("clone object", () => {
    const obj = {
      foo: 1,
      bar: "2",
    };

    expect(simpleClone(obj)).toEqual(obj);
  });

  test("clone array", () => {
    const arr = [1, 2, 3];

    expect(simpleClone(arr)).toEqual(arr);
  });

  test("clone nested object", () => {
    const obj = {
      foo: 1,
      bar: {
        foo: 1,
        bar: "2",
      },
    };

    expect(simpleClone(obj)).toEqual(obj);
  });

  test("clone nested array", () => {
    const arr = [1, 2, [1, 2, 3]];

    expect(simpleClone(arr)).toEqual(arr);
  });

  test("clone nested object & array", () => {
    const obj = {
      foo: 1,
      bar: [1, 2, { foo: 1 }],
    };

    expect(simpleClone(obj)).toEqual(obj);
  });

  test("clone other type", () => {
    const map = new Map();

    expect(simpleClone(map)).toBe(map);
  });
});
