// task 1
let name = "Pavel";
let age = 25;
let isMale = true;
let _null = null;
let _undefined = undefined;
let person = {
  name,
  age,
  isMale,
};
let _bigint = 100n;
let symbol = Symbol("UID");

console.log(name, Number(name), Boolean(name), String(name));
console.log(age, Number(age), Boolean(age), String(age));
console.log(isMale, Number(isMale), Boolean(isMale), String(isMale));
console.log(_null, Number(_null), Boolean(_null), String(_null));
console.log(
  _undefined,
  Number(_undefined),
  Boolean(_undefined),
  String(_undefined)
);
console.log(person, Number(person), Boolean(person), String(person));
console.log(_bigint, Number(_bigint), Boolean(_bigint), String(_bigint));
console.log(symbol, Number(String(symbol)), Boolean(symbol), String(symbol));
