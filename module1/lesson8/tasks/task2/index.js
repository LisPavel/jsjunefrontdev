const isOdd = (number) => number % 2 === 1;

const getSumOfNumbers = (number, type = "") => {
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    switch (type) {
      case "odd":
        sum += isOdd(i) && i;
        break;
      case "even":
        sum += !isOdd(i) && i;
        break;
      default:
        sum += i;
        break;
    }
  }
  return sum;
};

console.log(
  `number = 10, type = ‘odd’. Возвращает ${getSumOfNumbers(10, "odd")}`
);
console.log(
  `number = 10, type = ‘even’. Возвращает ${getSumOfNumbers(10, "even")}`
);
console.log(`number = 10, type = ‘’. Возвращает ${getSumOfNumbers(10)}`);
