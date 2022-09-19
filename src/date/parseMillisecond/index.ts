/* eslint-disable max-len */
import {
  ONE_SECOND,
  ONE_MINUTE,
  ONE_HOUR,
  ONE_DAY,
  ONE_WEEK,
  ONE_YEAR,
  ONE_MONTH,
} from "../constants";

type Unit =
  | "year"
  | "month"
  | "week"
  | "day"
  | "hour"
  | "minute"
  | "second"
  | "millisecond";

/**
 * @description 将毫秒数转换为年、月、周、天、小时、分钟、秒、毫秒
 * @param {number} seconds 秒数
 * @param {object} unit 可以设置忽略特定的单位，并将此单位的时间添加到下一级的单位中
 * @example
 * parseMillisecond(500 + ONE_SECOND * 30 + ONE_MINUTE * 40 + ONE_HOUR * 25)
 * => { years: 0, months: 0, weeks: 0, days: 1, hours: 1, minutes: 40, seconds: 30, milliseconds: 500 }
 *
 * parseMillisecond(500 + ONE_SECOND * 30 + ONE_MINUTE * 40 + ONE_HOUR * 25, { day: false, hour: false })
 * => { years: 0, months: 0, weeks: 0, days: 0, hours: 0, minutes: 40 + 60 * 25, seconds: 30, milliseconds: 500 }
 */
// eslint-disable-next-line max-statements
export const parseMillisecond = (
  millisecondValue: number,
  unit?: Partial<Record<Unit, boolean>>,
) => {
  let millisecond = millisecondValue;
  const result = {
    years: 0,
    months: 0,
    weeks: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
  };
  if (unit?.year !== false) {
    result.years = Math.floor(millisecond / ONE_YEAR);
    millisecond -= result.years * ONE_YEAR;
  }
  if (unit?.month !== false) {
    result.months = Math.floor(millisecond / ONE_MONTH);
    millisecond -= result.months * ONE_MONTH;
  }
  if (unit?.week !== false) {
    result.weeks = Math.floor(millisecond / ONE_WEEK);
    millisecond -= result.weeks * ONE_WEEK;
  }
  if (unit?.day !== false) {
    result.days = Math.floor(millisecond / ONE_DAY);
    millisecond -= result.days * ONE_DAY;
  }
  if (unit?.hour !== false) {
    result.hours = Math.floor(millisecond / ONE_HOUR);
    millisecond -= result.hours * ONE_HOUR;
  }
  if (unit?.minute !== false) {
    result.minutes = Math.floor(millisecond / ONE_MINUTE);
    millisecond -= result.minutes * ONE_MINUTE;
  }
  if (unit?.second !== false) {
    result.seconds = Math.floor(millisecond / ONE_SECOND);
    millisecond -= result.seconds * ONE_SECOND;
  }
  if (unit?.millisecond !== false) {
    result.milliseconds = Math.floor(millisecond / 1);
  }
  return result;
};
