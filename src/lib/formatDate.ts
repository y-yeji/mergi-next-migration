export const formatDate = (dateValue: number | string | Date): string => {
  let date: Date;

  if (typeof dateValue === "number" && dateValue.toString().length === 8) {
    const str = dateValue.toString();
    const year = parseInt(str.substring(0, 4), 10);
    const month = parseInt(str.substring(4, 6), 10);
    const day = parseInt(str.substring(6, 8), 10);
    date = new Date(year, month - 1, day);
  } else {
    date = new Date(dateValue);
  }

  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}.${m}.${d}`;
};
