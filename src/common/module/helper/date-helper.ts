const monthData = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const toMonthFullName = (month: number) => {
  let monthName = monthData[month];
  return monthName;
};

export { toMonthFullName };
