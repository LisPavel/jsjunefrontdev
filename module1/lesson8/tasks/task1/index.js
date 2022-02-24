const name = "Pavel";

function getName1(name) {
  return `Имя равно ${name}`;
}

const getName2 = function (name) {
  return `Имя равно ${name}`;
};

const getName3 = (name) => `Имя равно ${name}`;

console.log(
  "Functions result is ",
  getName1(name),
  getName2(name),
  getName3(name)
);
