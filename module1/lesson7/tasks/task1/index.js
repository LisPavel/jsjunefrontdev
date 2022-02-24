// // let health = Number(
// //   prompt('Введите число параметра "здоровье" для персонажа').trim()
// // );

// // if (health < 0 || !health || isNaN(health)) {
// //   console.log("condition", health < 0 || !health);
// //   alert('Параметр "здоровье" должен быть больше нуля!');
// // } else {
// //   console.log("health", health);
// //   alert(`Параметр "здоровье" равен ${health}`);
// // }

// const temperatureInCelsius = Number(
//   prompt("Введите температуру в градусах Цельсия").trim()
// );

// console.log(
//   "temperatureInCelsius",
//   temperatureInCelsius,
//   typeof temperatureInCelsius
// );

// if (temperatureInCelsius === 0) {
//   alert("0 градусов по Цельсию - это температура замерзания воды");
// } else if (temperatureInCelsius > 0) {
//   alert(
//     "Для замерзания воды температура должна быть 0 градусов по Цельсию либо ниже"
//   );
// }

// const temperatureInFahrenheit = (temperatureInCelsius * 9) / 5 + 32;
// console.log("temperatureInFahrenheit", temperatureInFahrenheit);

// const message = `${temperatureInCelsius} градусов по Цельсию - это ${temperatureInFahrenheit} по
// Фаренгейту.`;
// console.log("message", message);

// alert(message);

const salaryOfJuniorDeveloper = 500;
const numberOfJuniorDevelopers = 3;
let taxPercentage = 13;
let totalJuniorDevelopersSalary = 0;
console.log("totalJuniorDevelopersSalary", totalJuniorDevelopersSalary);

for (let i = 0; i < numberOfJuniorDevelopers; i += 1) {
  const salaryWithTax =
    salaryOfJuniorDeveloper - (salaryOfJuniorDeveloper * taxPercentage) / 100;
  console.log("salaryWithTax", salaryWithTax);
  
  totalJuniorDevelopersSalary += salaryWithTax;
}
console.log("totalJuniorDevelopersSalary", totalJuniorDevelopersSalary);
