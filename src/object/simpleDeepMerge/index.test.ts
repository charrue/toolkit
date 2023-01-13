import { describe, test, expect } from "vitest";
import { simpleDeepMerge } from "./index";

// test case from https://github.com/TehShrike/deepmerge/blob/master/test/merge.js
describe("simpleDeepCClone", () => {
  test("add keys in target that do not exist at the root", () => {
    const source = { key1: "value1", key2: "value2" };

    const result = simpleDeepMerge({}, source);
    expect(result).toEqual(source);
  });

  test("merge existing simple keys in target at the roots", () => {
    const target = { key1: "value1", key3: "value3" };
    const source = { key1: "changed", key2: "value2" };

    expect(simpleDeepMerge(target, source)).toEqual({
      key1: "changed",
      key2: "value2",
      key3: "value3",
    });
  });

  test("merge nested objects into target", () => {
    const target = {
      key1: {
        subkey1: "value1",
        subkey2: "value2",
      },
    };
    const source = {
      key1: {
        subkey1: "changed",
        subkey3: "added",
      },
    };

    expect(simpleDeepMerge(target, source)).toEqual({
      key1: {
        subkey1: "changed",
        subkey2: "value2",
        subkey3: "added",
      },
    });
  });

  test("replace simple key with nested object in target", () => {
    const target = {
      key1: "value1",
      key2: "value2",
    };
    const source = {
      key1: {
        subkey1: "subvalue1",
        subkey2: "subvalue2",
      },
    };

    expect(simpleDeepMerge(target, source)).toEqual({
      key1: {
        subkey1: "subvalue1",
        subkey2: "subvalue2",
      },
      key2: "value2",
    });
  });

  test("should add nested object in target", () => {
    const target = {
      a: {},
    };
    const source = {
      b: {
        c: {},
      },
    };

    expect(simpleDeepMerge(target, source)).toEqual({
      a: {},
      b: {
        c: {},
      },
    });
  });

  test("should replace objects with arrays", () => {
    const target = {
      key1: { subkey: "one" },
    };
    const source = {
      key1: ["subkey"],
    };

    expect(simpleDeepMerge(target, source)).toEqual({
      key1: ["subkey"],
    });
  });

  test("should replace arrays with objects", () => {
    const target = {
      key1: ["subkey"],
    };
    const source = {
      key1: { subkey: "one" },
    };

    expect(simpleDeepMerge(target, source)).toEqual({
      key1: { subkey: "one" },
    });
  });

  test("should replace dates with arrays", () => {
    const target = {
      key1: new Date(),
    };
    const source = {
      key1: ["subkey"],
    };

    expect(simpleDeepMerge(target, source)).toEqual({
      key1: ["subkey"],
    });
  });

  test("should replace null with arrays", () => {
    const target = {
      key1: null,
    };
    const source = {
      key1: ["subkey"],
    };

    expect(simpleDeepMerge(target, source)).toEqual({
      key1: ["subkey"],
    });
  });
  //

  test("should work on simple array", () => {
    const target = ["one", "two"];
    const source = ["one", "three"];

    expect(simpleDeepMerge(target, source)).toEqual(["one", "two", "one", "three"]);
  });

  test.only("should work on array properties", () => {
    const target = {
      key1: ["one", "three"],
      key2: ["four"],
    };
    const source = {
      key1: ["one", "two"],
    };

    expect(simpleDeepMerge(target, source)).toEqual({
      key1: ["one", "three", "one", "two"],
      key2: ["four"],
    });
  });

  test("should work on array of objects", () => {
    const target = [
      { key1: ["one", "two"] },
      { key3: ["four"] },
    ];
    const source = [
      { key1: ["one", "three"], key2: ["one"] },
      { key3: ["five"] },
    ];

    expect(simpleDeepMerge(target, source)).toEqual([
      { key1: ["one", "two"] },
      { key3: ["four"] },
      { key1: ["one", "three"], key2: ["one"] },
      { key3: ["five"] },
    ]);
  });

  test("should overwrite values when property is initialised but undefined", () => {
    const source = { value: undefined };

    expect(simpleDeepMerge({ value: [] }, source)).toEqual(source);
    expect(simpleDeepMerge({ value: 1 }, source)).toEqual(source);
    expect(simpleDeepMerge({ value: null }, source)).toEqual(source);
  });
});
