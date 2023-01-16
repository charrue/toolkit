import { DateFields, TimeFields } from "../types";

export const getDateFields = (date: Date): DateFields & TimeFields & { weekDay: number } => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const weekDay = date.getDay();

  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  const millisecond = date.getMilliseconds();

  return {
    year,
    month,
    day,
    /**
     * 一天中的周几，0 表示周日，6 表示周日
     */
    weekDay,
    hour,
    minute,
    second,
    millisecond,
  };
};
