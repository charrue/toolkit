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

  test("parses a simple string", () => {
    expect(parseQueryString("0=foo")).toEqual({
      0: "foo",
    });

    expect(parseQueryString("foo=c++")).toEqual({
      foo: "c  ",
    });

    expect(parseQueryString("foo")).toEqual({
      foo: null,
    });

    expect(parseQueryString("foo=")).toEqual({
      foo: "",
    });

    expect(parseQueryString("foo=bar")).toEqual({
      foo: "bar",
    });

    expect(parseQueryString("foo=bar=baz")).toEqual({
      foo: "bar=baz",
    });

    expect(parseQueryString("foo=bar&bar=baz")).toEqual({
      foo: "bar",
      bar: "baz",
    });

    expect(parseQueryString("foo=bar&baz")).toEqual({
      foo: "bar",
      baz: null,
    });

    expect(parseQueryString("a[]=b&a[]=c")).toEqual({
      "a[]": ["b", "c"],
    });

    expect(
      parseQueryString("cht=p3&chd=t:60,40&chs=250x100&chl=Hello|World")
    ).toEqual({
      cht: "p3",
      chd: "t:60,40",
      chs: "250x100",
      chl: "Hello|World",
    });
  });

  test("multiple query string", () => {
    expect(parseQueryString("foo=bar&key=val")).toEqual({
      foo: "bar",
      key: "val",
    });
    expect(parseQueryString("foo=bar&foo=val")).toEqual({
      foo: ["bar", "val"],
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
