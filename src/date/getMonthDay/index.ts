/**
 * @description 获取某一月有多少天
 * @param {number} options.year 年份，默认当前年份
 * @param {number} options.month 月份，默认当前月份
 * @returns {number} 某一月有多少天
 * @example
 * getMonthDay() // 当月天数
 * getMonthDay({ year: 2022, month: 1 }) // 31
 */
export const getMonthDay = (options: { year?: number; month?: number } = {}) => {
  const now = new Date();
  const targetYear = Number(options.year) || now.getFullYear();
  let targetMonth = Number(options.month) || now.getMonth();
  if (targetMonth < 0 || targetMonth > 12) {
    console.warn(`month must be between 0 and 12, but got ${targetMonth}`);
    targetMonth = now.getMonth();
  }

  return new Date(targetYear, targetMonth, 0).getDate();
};
