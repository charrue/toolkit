import { DateFields, TimeFields } from "../types";
import { isDateValid } from "../isDateValid/index";
import { getDateMillisecond } from "../getDateMillisecond/index";

type Unit = keyof DateFields | keyof TimeFields;

export const isDateBefore = (earlier: Date, later: Date, unit: Unit = "millisecond") => {
  if (!isDateValid(earlier) || !isDateValid(later)) return false;
  const t1 = getDateMillisecond(earlier, unit);
  const t2 = getDateMillisecond(later, unit);

  return t1 < t2;
};
