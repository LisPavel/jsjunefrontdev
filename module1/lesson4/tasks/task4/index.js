//task 3
//1
console.log(
  "console.log",
  Boolean(console.log),
  Number(console.log),
  String(console.log)
);
//2
console.log(
  "{ name: 'Maxim' }",
  Boolean({ name: "Maxim" }),
  Number({ name: "Maxim" }),
  String({ name: "Maxim" })
);
//3
console.log(
  "Symbol('key')",
  Boolean(Symbol("key")),
  // Number(Symbol('key')), ошибка
  String(Symbol("key"))
);
//4
console.log("Number", Boolean(Number), Number(Number), String(Number));
//5
console.log("''", Boolean(""), Number(""), String(""));
//6
console.log("0", Boolean(0), Number(0), String(0));
//7
console.log("-10", Boolean(-10), Number(-10), String(-10));
//8
console.log("'-105'", Boolean("-105"), Number("-105"), String("-105"));

// TASK 4
// 1
console.log(Number(' 1 2 3 4 5')); // NaN
// 2
console.log(Number('1234 5')); // 1234 - correct -> NaN
// 3
console.log(Number('12345')); // 12345 -- Number
// 4
console.log(String(false)); // "false"
// 5
console.log(Boolean(0000000)); // false -- boolean
// 6
console.log(Boolean(0.0000001)); // true -- boolean
// 7
console.log(String(undefined)); // "undefined"
// 8
console.log(Number('100f')); // 100 - correct -> NaN
// 9
console.log(Number('100')); // 100 -- Number
// 10
console.log(Number('000001')); // 1 -- Number
