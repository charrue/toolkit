import { describe, expect, test } from "vitest";
import { parseQueryString } from "./index";

describe("parseQueryString", () => {
  test("no query string", () => {
    expect(parseQueryString("")).toEqual({});
    expect(parseQueryString(" ")).toEqual({});
    expect(parseQueryString("?")).toEqual({});
    expect(parseQueryString("? ")).toEqual({});
  });

  test("query string start with a `?`", () => {
    expect(parseQueryString("?foo=bar")).toEqual({
      foo: "bar",
    });
  });

  test("common query string", () => {
    expect(parseQueryString("foo=bar")).toEqual({
      foo: "bar",
    });
  });

  test("multiple query string", () => {
    expect(parseQueryString("foo=bar&key=val")).toEqual({
      foo: "bar",
      key: "val",
    });
  });

  test("query string without value", () => {
    expect(parseQueryString("foo")).toEqual({
      foo: null,
    });

    expect(parseQueryString("foo&key")).toEqual({
      foo: null,
      key: null,
    });

    expect(parseQueryString("foo=bar&key")).toEqual({
      foo: "bar",
      key: null,
    });

    expect(parseQueryString("foo&key=val")).toEqual({
      foo: null,
      key: "val",
    });
  });

  test("handle `+` in query string", () => {
    expect(parseQueryString("foo+faz=bar+baz++")).toEqual({
      "foo faz": "bar baz  ",
    });
  });
});
