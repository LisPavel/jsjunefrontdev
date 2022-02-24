const dog = {
  name: "Чарли",
  type: "Собака",
  makeSound() {
    return "Гав-Гав";
  },
};

const bird = {
  name: "Петя",
  type: "Воробей",
  makeSound() {
    return "Чик-чирик";
  },
};

function makeDomestic(isDomestic) {
  const { name, type, makeSound } = this;
  console.log(`${type} по имени ${name} говорит ${makeSound?.()}`);
  this.isDomestic = isDomestic;
  return this;
}

console.log(makeDomestic.bind(dog)(true));

console.log(makeDomestic.call(bird, false));
console.log(makeDomestic.apply(bird, [true]));
