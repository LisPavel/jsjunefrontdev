// TASK 1
const name = "Pavel";
const age = 25;
const isMale = true;
const _null = null;
const _undefined = undefined;
const person = {
  name,
  age,
  isMale,
};
const _bigint = 100n;
const symbol = Symbol("UID");

console.log("name", name, typeof name);
console.log("age", age, typeof age);
console.log("isMale", isMale, typeof isMale);
console.log("_null", _null, typeof _null);
console.log("_undefined", _undefined, typeof _undefined);
console.log("person", person, typeof person);
console.log("_bigint", _bigint, typeof _bigint);
console.log("symbol", symbol, typeof symbol);

// TASK 2

let _age = 18;
let _name = "Lucy";
let _isMale = false;

_age = "test";
_name = 42;
_isMale = null;

alert(_age);
alert(_name);
alert(_isMale);
