import { describe, expect, test } from 'vitest';
import { formatMillisecond } from './index';
import { ONE_HOUR, ONE_SECOND, ONE_MINUTE, ONE_YEAR, ONE_MONTH, ONE_DAY } from '../constants';

describe("formatMillisecond", () => {
  test("formatMillisecond(millisecond)", () => {
    expect(
      formatMillisecond(ONE_HOUR + ONE_MINUTE * 20 + ONE_SECOND * 3)
    )
      .toEqual("01:20:03");
  })
  test("formatMillisecond(millisecond, formatter)", () => {
    expect(
      formatMillisecond(
        ONE_YEAR * 2 + ONE_MONTH * 4 + ONE_DAY * 10 + ONE_HOUR + ONE_MINUTE * 20 + ONE_SECOND * 3,
        "Y年M月D天 HH:mm:ss"
      )
    )
      .toEqual("2年4月10天 01:20:03");
  })
})