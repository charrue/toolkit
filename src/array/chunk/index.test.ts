import { test, expect } from "vitest";
import { chunk } from ".";

test("chunk", () => {
  expect(chunk(["a", "b", "c", "d"], 2)).toEqual([["a", "b"], ["c", "d"]]);

  expect(chunk(["a", "b", "c", "d"], 3)).toEqual([["a", "b", "c"], ["d"]]);

  expect(chunk(["a", "b", "c", "d"], 5)).toEqual([["a", "b", "c", "d"]]);

  expect(chunk(["a", "b", "c", "d"], 0)).toEqual([]);
});
