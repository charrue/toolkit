import { test, expect } from "vitest";
import { objectKeys } from "./index";

const KEY = Symbol("KEY");
const obj = {
  foo: 1,
  bar: 2,
  [KEY]: 3,
};
test("objectKeys", () => {
  expect(objectKeys(obj)).toEqual(["foo", "bar"]);
  expect(objectKeys(obj, true)).toEqual(["foo", "bar", KEY]);
});
