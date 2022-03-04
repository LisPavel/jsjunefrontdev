const isPalindrome = (string = "") => {
  string = string.toLowerCase();
  const isEven = string.length % 2;
  const middle = Math.floor(string.length / 2);
  const substr1 = string.slice(0, middle),
    substr2 = string.slice(middle + isEven);
  for (let i = 0; i < substr1.length; i++) {
    if (substr1.at(i) !== substr2.at(substr2.length - i)) return false;
  }
  return true;
};
const isPalindromeViaIndexes = (string = "") => {
  string = string.toUpperCase();
  const middle = Math.floor(string.length / 2);
  for (let i = 0; i < middle; i++) {
    if (string.at(i) !== string.at(string.length - 1 - i)) return false;
  }
  return true;
};

let time = performance.now();
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("programmer")); // false
console.log(performance.now() - time);
// ----------------------------------------------------------------------------
time = performance.now();
console.log(isPalindromeViaIndexes("racecar")); // true
console.log(isPalindromeViaIndexes("programmer")); // false
console.log(performance.now() - time);
