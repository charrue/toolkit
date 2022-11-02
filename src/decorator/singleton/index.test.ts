import Singleton from "./index";
import { describe, test, expect } from "vitest";

@Singleton()
class Foo {
  constructor(private a?: number) {}
}

describe("Singleton", () => {
  test("basic usage", () => {
    expect(new Foo()).toBe(new Foo());
  });
  test("different constructor parameters", () => {
    expect(new Foo(1)).toBe(new Foo(1));
    expect(new Foo(1)).not.toBe(new Foo(2));
  });
});
