export const endOfWeek = (date: Date, weekStartsOn = 1) => {
  const weekEndDate = new Date(date.getTime());
  const day = weekEndDate.getDay();
  const diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn);

  weekEndDate.setDate(weekEndDate.getDate() + diff);
  weekEndDate.setHours(23, 59, 59, 999);
  return weekEndDate;
};
