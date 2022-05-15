import { expect } from "vitest";
import { test } from "vitest";
import { describe } from "vitest";
import { isControlCode, isDigitCode, isLetterCode, isUpperCaseCode, isLowerCaseCode, isWhiteSpaceCode, isPunctuation, isAlphanumeric } from '../src/string/ascii';

describe("check ascii category", () => {

  test("isControlCode", () => {
    expect(isControlCode(`
    `)).toBe(true)
    expect(isControlCode(``)).toBe(false)
    expect(isControlCode(7)).toBe(true)

  })

  test("isDigitCode", () => {
    expect(isDigitCode("")).toBe(false)
    expect(isDigitCode("1")).toBe(true)
    expect(isDigitCode(1)).toBe(false)
    expect(isDigitCode(50)).toBe(true)
  })

  test("isUpperCaseCode", () => {
    expect(isUpperCaseCode("")).toBe(false)
    expect(isUpperCaseCode("A")).toBe(true)
    expect(isUpperCaseCode("Aa")).toBe(true)
    expect(isUpperCaseCode("a")).toBe(false)
    expect(isUpperCaseCode("aA")).toBe(false)
    expect(isUpperCaseCode(65)).toBe(true)
  })

  test("isLowerCaseCode", () => {
    expect(isLowerCaseCode("")).toBe(false)
    expect(isLowerCaseCode("A")).toBe(false)
    expect(isLowerCaseCode("Aa")).toBe(false)
    expect(isLowerCaseCode("a")).toBe(true)
    expect(isLowerCaseCode("aA")).toBe(true)
    expect(isLowerCaseCode(122)).toBe(true)
  })

  test("isWhiteSpaceCode", () => {
    expect(isWhiteSpaceCode("")).toBe(false)
    expect(isWhiteSpaceCode(" ")).toBe(true)
    expect(isWhiteSpaceCode("\r\n")).toBe(true)
    expect(isWhiteSpaceCode("\n")).toBe(false)
    expect(isWhiteSpaceCode(`
    `)).toBe(false)
    expect(isWhiteSpaceCode(32)).toBe(true)
  })

  test("isLetterCode", () => {
    expect(isLetterCode("")).toBe(false)
    expect(isLetterCode("A")).toBe(true)
    expect(isLetterCode("Aa")).toBe(true)
    expect(isLetterCode("a")).toBe(true)
    expect(isLetterCode("aA")).toBe(true)
  })
  
  test("isAlphanumeric", () => {
    expect(isAlphanumeric("a")).toBe(true)
    expect(isAlphanumeric("1")).toBe(true)
  })

  test("isPunctuation", () => {
    expect(isPunctuation("")).toBe(false)
    expect(isPunctuation(".")).toBe(true)
    expect(isPunctuation("。")).toBe(false)
    expect(isPunctuation(",")).toBe(true)
    expect(isPunctuation("，")).toBe(false)
    expect(isPunctuation("`")).toBe(true)
    expect(isPunctuation("~")).toBe(true)
    expect(isPunctuation("#")).toBe(true)
    expect(isPunctuation(63)).toBe(true)
  })
})