const stringToCharArray = (string) => string.split("");

const filterWithUniqueValues = (char, index, array = []) =>
  array.indexOf(char) === index;

const compareArrays = (arr1, arr2) => {
  arr1.sort();
  arr2.sort();
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

const isEqualSymbols = (str1, str2) => {
  const arr1 = stringToCharArray(str1.toLowerCase()).filter(
      filterWithUniqueValues
    ),
    arr2 = stringToCharArray(str2.toLowerCase()).filter(filterWithUniqueValues);
  return compareArrays(arr1, arr2);
};

console.log(isEqualSymbols("адрес", "среда")); // true
console.log(isEqualSymbols("ноутбук", "программист")); // false
