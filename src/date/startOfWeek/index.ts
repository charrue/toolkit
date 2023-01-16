export const startOfWeek = (date: Date, weekStartsOn = 1) => {
  const weekStartDate = new Date(date.getTime());
  const day = weekStartDate.getDay();
  const diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;

  weekStartDate.setDate(weekStartDate.getDate() - diff);
  weekStartDate.setHours(0, 0, 0, 0);
  return weekStartDate;
};
