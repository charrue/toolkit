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

    test("date", () => {
      expect(deepClone(new Date("2020-01-01"))).toEqual(new Date("2020-01-01"))
    })
    test("function", () => {
      const fn = () => {
        //
      }
      expect(deepClone(fn)).toEqual(fn)
    })
    test("generator function", () => {
      const fn = function* () {
        yield 123
      }
      expect(deepClone(fn)).toEqual(fn)
    })
    test("async function", () => {
      const fn = async function () {
        return 123
      }
      expect(deepClone(fn)).toEqual(fn)
    })
    test("map", () => {
      const map = new Map([['a', 1]])
      expect(deepClone(map)).toEqual(map)
    })
    test("set", () => {
      const set = new Set([1, 2])
      expect(deepClone(set)).toEqual(set)
    })
    test("buffer", () => {
      const buffer = Buffer.from(Date.now().toString(36))
      expect(deepClone({ buffer })).toEqual({ buffer })
    })
    test("nested map", () => {
      const map = new Map([["a", { b: 3 }], ["b", { c: 2 }]])
      expect(deepClone(map)).toEqual(map)
    })
    test("nested set", () => {
      const set = new Set([{ a: 1 }, { b: 2 }])
      expect(deepClone(set)).toEqual(set)
    })

    test("shallow object", () => {
      expect(deepClone({})).toEqual({})
      const plainObject = {
        a: 1,
        b: "2",
        c: false,
        d: null,
        e: undefined,
      }
      expect(deepClone(plainObject)).toEqual(plainObject)
    })

    test("shallow array", () => {
      expect(deepClone([])).toEqual([])
      const plainArray = [1, "2", false, null, undefined]
      expect(deepClone(plainArray)).toEqual(plainArray)
    })
    test("deep object", () => {
      const obj = {
        a: {
          b: {
            c: 1
          }
        },
        d: 4
      }

      expect(deepClone(obj)).toEqual(obj)
    })
    test("deep array", () => {
      const arr = [
        1,
        [2, 3],
        {
          a: 1,
          b: 3
        }
      ]
      expect(deepClone(arr)).toEqual(arr)
    })
  })
})
