import { describe, expect, test } from 'vitest';
import { getMonthDay } from './index';

describe("getMonthDay", () => {

  test("getMonthDay()", () => {
    const currentDate = new Date();
    expect(getMonthDay()).toBe(getMonthDay({  year: currentDate.getFullYear(), month: currentDate.getMonth() }));
  })

  test("getMonthDay({ year month })", () => {
    expect(getMonthDay({ year: 2022, month: 1 })).toBe(31);
    expect(getMonthDay({ year: 2022, month: 2 })).toBe(28);
  })
})
