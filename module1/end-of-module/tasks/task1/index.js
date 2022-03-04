const createRange = (start, end) =>
  Array.from({ length: end - start + 1 }, (_, i) => start + i);

const isDividesBy3And7 = (number) => number % 3 === 0 && number % 7 === 0;
const isNotDividesBy5And2 = (number) => number % 5 !== 0 && number % 2 !== 0;

const maxNumber = (max, number) => Math.max(max, number);

const findWinningTicket = (rangeArray = []) =>
  rangeArray
    .filter(isDividesBy3And7)
    .filter(isNotDividesBy5And2)
    .reduce(maxNumber, 0);

console.log(findWinningTicket(createRange(1016, 1937)));
