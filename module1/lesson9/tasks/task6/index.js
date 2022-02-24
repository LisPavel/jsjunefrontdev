const sumViaFor = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i] ** 3;
  }
  return sum;
};

const sumViaForOf = (array) => {
  let sum = 0;
  for (const number of array) {
    sum += number ** 3;
  }
  return sum;
};

const sumViaForEach = (array) => {
  let sum = 0;
  array.forEach((number) => (sum += number ** 3));
  return sum;
};

const sumViaReduce = (array) =>
  array.reduce((sum, number) => (sum += number ** 3), 0);

const numbers = [10, 4, 100, -5, 54, 2];

console.log("sumViaFor", sumViaFor(numbers));
console.log("sumViaForOf", sumViaForOf(numbers));
console.log("sumViaForEach", sumViaForEach(numbers));
console.log("sumViaReduce", sumViaReduce(numbers));
