import { describe, test, expect } from 'vitest';
import { parseMillisecond } from './index';
import { ONE_DAY, ONE_HOUR, ONE_MINUTE, ONE_SECOND, ONE_YEAR, ONE_MONTH, ONE_WEEK } from '../constants';

describe("parseMillisecond", () => {
  test("parseMillisecond(millisecond)", () => {
    const year = 1
    const month = 2
    const week = 3
    const day = 1
    const hour = 2
    const min = 30
    const sec = 50
    const millisec = 500

    expect(
      parseMillisecond(
        ONE_YEAR * year +
        ONE_MONTH * month +
        ONE_WEEK * week +
        ONE_DAY * day +
        ONE_HOUR * hour +
        ONE_MINUTE * min +
        ONE_SECOND * sec +
        millisec
      )
    )
      .toEqual({
        years: year,
        months: month,
        weeks: week,
        days: day,
        hours: hour,
        minutes: min,
        seconds: sec,
        milliseconds: millisec,
      });
  })
  test("parseMillisecond(millisecond)", () => {
    const showYear = false
    const showMonth = true
    const showHour = true

    expect(
      parseMillisecond(
        ONE_YEAR * 1,
        {
          year: showYear,
          hour: showHour
        }
      )
    )
      .toEqual({
        years: showYear ? 1 : 0,
        months: showYear ? showMonth ? 0 : 0 : 12,
        weeks: 0,
        days: showYear ? 0 : showMonth ? 5 : 30,
        hours: 0,
        minutes: 0,
        seconds: 0,
        milliseconds: 0,
      });
  })
})
