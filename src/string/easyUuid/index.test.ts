import { test, describe, expect } from "vitest";
import { easyUuid } from "./index";

describe("easyUuid", () => {
  test("not equal", () => {
    expect(easyUuid()).not.toBe(easyUuid());
  });
});
