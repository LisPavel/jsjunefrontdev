const createArray = (length) => Array.from({ length }, (val, i) => i + 1);

const getSumOfSequence = (number) => {
  const array = createArray(number);
  return array[0] + array[array.length - 1];
};

console.log("getSumOfSequence", getSumOfSequence(5));
