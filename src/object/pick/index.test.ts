import { describe, test, expect } from "vitest";
import { pick } from "./index";

describe("pick", () => {
  test("basic usage", () => {
    const obj1 = {
      foo: {
        name: "foo",
        age: 10,
      },
      bar: [1, { baz: 2 }, 3],
    };
    const obj2 = pick(obj1, ["foo", "name"]);
    expect(obj2).toEqual({
      foo: {
        name: "foo",
        age: 10,
      },
    });
  });

  test("getDefaultValue", () => {
    const obj1 = {
      foo: {
        name: "foo",
        age: 10,
      },
      bar: [1, { baz: 2 }, 3],
    };
    const obj2 = pick(obj1, ["foo", "name"], () => "default");
    expect(obj2).toEqual({
      foo: {
        name: "foo",
        age: 10,
      },
      name: "default",
    });
  });
});
