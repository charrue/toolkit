// fork from https://github.com/iamkun/dayjs/blob/dev/src/index.js
import { DATE_FORMAT_RE, WEEKDAYS_ZH, MONTHS_ZH } from "../constants";
import { getDateFields } from "../getDateFields/index";
import { isDateValid } from "../isDateValid/index";

const meridiemFunc = (hour: number, isLowercase: boolean) => {
  const m = (hour < 12 ? "AM" : "PM");
  return isLowercase ? m.toLowerCase() : m;
};

const utcOffset = (date: Date) => -Math.round(date.getTimezoneOffset() / 15) * 15;

const padStart = (str: number | string, targetLength: number, padString: string) => `${str}`.padStart(targetLength, padString);

const padZoneStr = (date: Date) => {
  const negMinutes = -utcOffset(date);
  const minutes = Math.abs(negMinutes);
  const hourOffset = Math.floor(minutes / 60);
  const minuteOffset = minutes % 60;
  return `${negMinutes <= 0 ? "+" : "-"}${padStart(hourOffset, 2, "0")}:${padStart(minuteOffset, 2, "0")}`;
};

export const formatDate = (date: Date, formatter = "YYYY-MM-DD") => {
  if (!isDateValid(date)) {
    return "Invalid Date";
  }

  const dateFields = getDateFields(date);
  const y = `${dateFields.year!}`;
  const m = `${dateFields.month!}`;
  const d = `${dateFields.day!}`;
  const w = `${dateFields.weekDay!}`;
  const h = `${dateFields.hour!}`;
  const min = `${dateFields.minute!}`;
  const s = `${dateFields.second!}`;
  const ms = `${dateFields.millisecond!}`;

  const matches: Record<string, string> = {
    YY: y.slice(-2),
    YYYY: y,
    M: m,
    MM: padStart(m, 2, "0"),
    MMMM: MONTHS_ZH[dateFields.month! - 1],
    D: d,
    DD: padStart(d, 2, "0"),
    d: w,
    dddd: WEEKDAYS_ZH[dateFields.weekDay!],
    H: h,
    HH: padStart(h, 2, "0"),
    h: padStart(dateFields.hour! % 12, 1, "0"),
    hh: padStart(dateFields.hour! % 12, 2, "0"),
    a: meridiemFunc(dateFields.hour!, true),
    A: meridiemFunc(dateFields.hour!, false),
    m: min,
    mm: padStart(min, 2, "0"),
    s,
    ss: padStart(s, 2, "0"),
    SSS: padStart(ms, 3, "0"),
    Z: padZoneStr(date),
  };
  return formatter.replace(DATE_FORMAT_RE, (match, $1) => $1 || matches[match] || padZoneStr(date).replace(":", ""));
};
