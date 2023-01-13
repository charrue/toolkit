import { test, expect } from "vitest";
import { omit } from "./index";

test("omit", () => {
  const obj1 = {
    foo: {
      name: "foo",
      age: 10,
    },
    bar: [1, { baz: 2 }, 3],
  };
  const obj2 = omit(obj1, ["foo", "bar"]);
  expect(obj2).toEqual({});
});
