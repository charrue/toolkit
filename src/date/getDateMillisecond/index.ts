import { getDateFields } from "../getDateFields/index";
import { ONE_YEAR, ONE_MONTH, ONE_DAY, ONE_HOUR, ONE_MINUTE, ONE_SECOND } from "../constants";
import { DateFields, TimeFields } from "../types";
import { isDateValid } from "../isDateValid/index";

type Unit = keyof DateFields | keyof TimeFields;

export const getDateMillisecond = (date: Date, unit: Unit = "millisecond") => {
  if (!isDateValid(date)) return 0;
  const fields = getDateFields(date);

  let t = 0;
  t += fields.year! * ONE_YEAR;
  if (unit === "year") return t;

  t += fields.month! * ONE_MONTH;
  if (unit === "month") return t;

  t += fields.day! * ONE_DAY;
  if (unit === "day") return t;

  t += fields.hour! * ONE_HOUR;
  if (unit === "hour") return t;

  t += fields.minute! * ONE_MINUTE;
  if (unit === "minute") return t;

  t += fields.second! * ONE_SECOND;
  if (unit === "second") return t;

  t += fields.millisecond!;
  return t;
};
