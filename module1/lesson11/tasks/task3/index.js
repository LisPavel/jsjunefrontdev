const addDays = (date, days = 1) => {
  const daysInMs = days * 24 * 60 * 60 * 1000;
  return new Date((date instanceof Date ? date.getTime() : date) + daysInMs);
};

const dateAfter5Days_v1 = addDays(new Date(), 5);
const dateAfter5Days_v2 = addDays(Date.now(), 5);

const dateAfter1Day = addDays(new Date());

console.log("dateAfter5Days_v1", dateAfter5Days_v1);
console.log("dateAfter5Days_v2", dateAfter5Days_v2);
console.log("dateAfter1Day", dateAfter1Day);

