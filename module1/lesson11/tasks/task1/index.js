const getDateFormat = (date, separator = ".") => {
  const arrDate = [
    String(date.getDate()).padStart(2, "0"),
    String(date.getMonth() + 1).padStart(2, "0"),
    date.getFullYear(),
  ];

  separator === "-" && ([arrDate[1], arrDate[0]] = [arrDate[0], arrDate[1]]);

  return arrDate.join(separator);
};

const res = getDateFormat(new Date(2021, 10, 12));
const res2 = getDateFormat(new Date(), "-");
const res3 = getDateFormat(new Date(), "*");

console.log(res, res2, res3);
