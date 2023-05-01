import { test, describe, expect } from "vitest";
import { simpleUuid } from "./index";

describe("simpleUuid", () => {
  test("not equal", () => {
    expect(simpleUuid()).not.toBe(simpleUuid());
  });
});
