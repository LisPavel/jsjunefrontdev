class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  compareAge(person) {
    return (
      `${this.name} ${this.age >= person.age ? "старше" : "младше"},` +
      ` чем ${person.name}`
    );
  }
}

const person1 = new Person("Максим", 24);
const person2 = new Person("Светлана", 36);
const person3 = new Person("Ирина", 23);

console.log(person1.compareAge(person2)); // Максим младше, чем Светлана
console.log(person2.compareAge(person3)); // Светлана старше, чем Ирина
console.log(person3.compareAge(person1)); // Ирина младше, чем Максим
