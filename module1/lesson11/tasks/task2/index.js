const getDaysBeforeBirthday = (nextBirthdayDate) => {
  return convertMsToDays(
    (typeof nextBirthdayDate === "number"
      ? nextBirthdayDate
      : nextBirthdayDate.getTime()) - Date.now()
  );
};

function convertMsToDays(ms) {
  return Math.round(ms / (1000 * 60 * 60 * 24));
}

const date = new Date(2022, 4, 18);
console.log("date", date);

console.log(`days left: ${getDaysBeforeBirthday(date)}`);
console.log(`days left: ${getDaysBeforeBirthday(date.getTime())}`);
