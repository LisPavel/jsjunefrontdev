const unique = (arr = []) => arr.filter((n, i, arr) => arr.indexOf(n) === i);
const uniqueViaSet = (arr = []) => Array.from(new Set(arr));

console.log(unique([1, 1, 2, 2, 4, 2, 3, 7, 3]));
console.log(uniqueViaSet([1, 1, 2, 2, 4, 2, 3, 7, 3]));
