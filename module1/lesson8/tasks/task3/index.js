const getDivisorsCount = (number = 1) => {
  if (number < 0 || !Number.isInteger(number)) {
    alert("number должен быть целым числом и больше нуля!");
    return 0;
  }
  let divisorsCount = 0;
  for (let i = 0; i <= number; i++) {
    if (number % i === 0) divisorsCount++;
  }
  return divisorsCount;
};

console.log("result", getDivisorsCount(4));
console.log("result", getDivisorsCount(5));
console.log("result", getDivisorsCount(12));
console.log("result", getDivisorsCount(30));
