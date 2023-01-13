import { test, expect } from "vitest";
import { clearUndefined } from "./index";

test("clearUndefined", () => {
  const obj = {
    foo: 1,
    bar: undefined,
  };

  const result = clearUndefined(obj);
  expect(result).toEqual({ foo: 1 });
  expect(obj).toEqual({
    foo: 1,
    bar: undefined,
  });
});
