import { describe, test, expect } from 'vitest';
import { hasIn, pick, omit, deepClone } from '../src/object/index';

describe("object", () => {
  test("hasIn", () => {
    const key = Symbol("Key")
    const obj = { a: 1, [key]: 2, 100: 100 }
    expect(hasIn(obj, "a")).toBe(true)
    expect(hasIn(obj, key)).toBe(true)
    expect(hasIn(obj, 100)).toBe(true)
    expect(hasIn(obj, "100")).toBe(true)
    expect(hasIn(obj, "101")).toBe(false)
  })

  test("pick", () => {
    const symbolKey = Symbol("Key")
    const data = { a: 1, b: undefined, [symbolKey]: 2, 100: null }
    expect(pick(data, [])).toEqual({})
    expect(pick(data, ["a"])).toEqual({ a: 1 })
    expect(pick(data, ["a", "b"])).toEqual({ a: 1, b: undefined })
    expect(pick(data, ["a", "b", symbolKey])).toEqual({ a: 1, b: undefined, [symbolKey]: 2 })
    expect(pick(data, ["a", "b", 100])).toEqual({ a: 1, b: undefined, 100: null })
    expect(pick(data, ["a", "b", "100"])).toEqual({ a: 1, b: undefined, 100: null })
  })

  test("omit", () => {
    const symbolKey = Symbol("Key")
    const data = { a: 1, b: undefined, [symbolKey]: 2, 100: null }
    expect(omit(data, [])).toEqual(data)
    expect(omit(data, ["a"])).toEqual({ b: undefined, [symbolKey]: 2, 100: null })
    expect(omit(data, ["a", "b"])).toEqual({ [symbolKey]: 2, 100: null })
    expect(omit(data, ["a", "b", symbolKey])).toEqual({ 100: null })
    expect(omit(data, ["a", "b", 100])).toEqual({ [symbolKey]: 2 })
    expect(omit(data, ["a", "b", "100"])).toEqual({ [symbolKey]: 2 })
  })

  describe("deepClone", () => {
    test("private values", () => {
      expect(deepClone(false)).toBe(false)
      expect(deepClone(1)).toBe(1)
      expect(deepClone("str")).toBe("str")
      expect(deepClone(null)).toBe(null)
      expect(deepClone(undefined)).toBe(undefined)
      const bigInt = BigInt(Number.MAX_SAFE_INTEGER)
      expect(deepClone(bigInt)).toBe(bigInt)
      const symbolKey = Symbol("Key")
      expect(deepClone(symbolKey)).toBe(symbolKey)
    })

    test("date", () => {})
    test("function", () => {})
    test("generator function", () => {})
    test("async function", () => {})
    test("map", () => {})
    test("set", () => {})
    test("buffer", () => {})
    test("nested map", () => {})
    test("nested set", () => {})

    test("shallow object", () => {
      expect(deepClone({})).toEqual({})
      const symbolKey = Symbol("Key")
      const plainObject = {
        a: 1,
        b: "2",
        c: false,
        d: null,
        e: undefined,
      }
      expect(deepClone(plainObject)).toEqual(plainObject)
    })

    test("shallow array", () => {})
    test("deep object", () => {})
    test("deep array", () => {})

  })
})
