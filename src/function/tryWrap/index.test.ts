import { describe, test, expect, vi } from "vitest";
import { tryWrap } from "./index";

describe("tryWrap", () => {
  test("call function", () => {
    const fn = vi.fn();
    expect(fn).toBeCalledTimes(0);
    const newFn = tryWrap(fn);
    expect(fn).toBeCalledTimes(0);
    expect(typeof newFn).toBe("function");

    newFn();
    expect(fn).toBeCalledTimes(1);
  });

  test("has error", () => {
    const fn = () => {
      throw new Error("some error...");
    };
    const onError = (e: Error) => {
      expect(e.message).toBe("some error...");
    };

    const value = tryWrap(fn, onError)();
    expect(value).toBe(undefined);
  });

  test("return value", () => {
    const fn = (a: number, b: number) => Math.max(a, b);

    const value = tryWrap(fn)(1, 2);
    expect(value).toBe(2);
  });

  test("call async function", async () => {
    const fn = () => Promise.resolve(1);
    const val = await tryWrap(fn)();
    expect(val).toBe(1);
  });

  test("call async function has error", async () => {
    const fn = async () => {
      await Promise.resolve(1);
      throw new Error("some error...");
    };
    const onError = (e: Error) => {
      expect(e.message).toBe("some error...");
    };
    const val = await tryWrap(fn, onError)();
    expect(val).toBe(undefined);
  });
});
