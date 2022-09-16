import { test, expect } from "vitest";
import { deepClone } from "./deepClone";

test("integers, strings and booleans", () => {
  expect(deepClone(10)).toBe(10);
  expect(deepClone(-10.001)).toBe(-10.001);
  expect(deepClone(9007199254740991)).toBe(9007199254740991);

  expect(deepClone("foo")).toBe("foo")

  expect(deepClone(true)).toBe(true)
})


test("object", () => {
  const obj1 = {
    foo: "foo"
  }
  const obj2 = {
    a: 1,
    b: "2",
    c: false,
    d: new Date(),
    e: RegExp("obj"),
    f: Symbol("symbol"),
    g: null,
    h: undefined,
    i: [1, 2, 3],
    j: {},
    k: new Map([["a", 1], ["b", 2]]),
    l: new Set([1, 2, 3]),
    m: new WeakMap([[{}, 1], [{}, 2]]),
    n: new WeakSet<string[]>([["a", "b"]]),
    obj1
  }

  expect(deepClone(obj1)).toEqual(obj1);
  expect(deepClone(obj2)).toEqual(obj2);
})


test("array", () => {
  const arr1 = [1, 2]
  expect(deepClone(arr1)).toEqual(arr1)

  const arr2 = [1, 2, [3, 4]]
  expect(deepClone(arr2)).toEqual(arr2);

  const arr3 = [{ foo: "foo" }, { bar: "bar" }]
  expect(arr3).toEqual(arr3);
})

class Foo {
  getName() {
    return "name";
  }
}
test("instance", () => {
  const ins = new Foo();

  expect(deepClone(ins)).toEqual(ins)
})
