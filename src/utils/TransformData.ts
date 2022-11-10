export const getDayByMonth = (year: number, month: number) => {
  const date = new Date(year, month, 1);
  const weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const dates: any = [];

  if (year && month) {
    while (date.getMonth() === month) {
      const days = weekday[date.getDay()];
      dates.push({
        day: date.getDate(),
        dayOnWeek: days,
        isToday: false,
      });
      date.setDate(date.getDate() + 1);
    }
  }

  return dates;
};
