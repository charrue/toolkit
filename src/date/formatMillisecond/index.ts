import { parseMillisecond } from "../parseMillisecond/index";
import { padStart } from "../../string/index";

type SecondFormatUnit = "Y" | "M" | "MM" | "D" | "DD" | "H" | "HH" | "m" | "mm" | "s" | "ss" | "SSS"

const REGEX_FORMAT = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;

/**
 * @description 将毫秒数转换为时间格式
 * @param millisecond 毫秒数
 * @param formatter 格式化字符串，默认是 HH:mm:ss
 */
export const formatMillisecond = (millisecond: number, formatter = "HH:mm:ss") => {
  const {
    years,
    months,
    days,
    hours,
    minutes,
    seconds,
    milliseconds,
  } = parseMillisecond(millisecond, { week: false });

  const matches: Record<SecondFormatUnit, string> = {
    Y: `${years}`,
    M: `${months}`,
    MM: padStart(`${days}`, 2, "0"),
    D: `${days}`,
    DD: padStart(`${days}`, 2, "0"),
    H: `${hours}`,
    HH: padStart(`${hours}`, 2, "0"),
    m: `${minutes}`,
    mm: padStart(`${minutes}`, 2, "0"),
    s: `${seconds}`,
    ss: padStart(`${seconds}`, 2, "0"),
    SSS: padStart(`${milliseconds}`, 3, "0"),
  };

  return formatter.replace(
    REGEX_FORMAT,
    (match: string, $1: string) => $1 || matches[match as SecondFormatUnit],
  );
};
