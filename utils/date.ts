export const getDateTime = (date: string | number) => {
  const newDate = new Date(Number(date));
  const y = newDate.getFullYear();
  const m = newDate.getMonth();
  const d = newDate.getDate();
  return `${y}年${m}月${d}日`;
};
