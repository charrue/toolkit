import { describe, test, expect } from "vitest";
import { isUrl } from "./index";

describe(isUrl.name, () => {
  test("falsy", () => {
    for (const value of [
      "http://127.0.0.1",
      "http://foo.bar:8878878",
      "wx://foo.bar",
      "foo.bar",
      "http://",
      "https://",
      "ftp://foo.bar",
      "http://1111.0.1.22",
      "大口大口http://foo.bar",
      "http://foo.bar:80得到了",
    ]) {
      expect(isUrl(value)).toBeFalsy();
    }
  });

  test("truthy", () => {
    for (const value of [
      "http://foo.bar",
      "http://foo.bar:80",
      "http://foo.bar/oop?ddd#cc",
      "https://foo.bar",
      "http://39.137.107.98:22/hello",
    ]) {
      expect(isUrl(value)).toBeTruthy();
    }
  });
});
