const coffees = ["Latte", "Cappuccino", "Americano"];

doTask3(coffees);
doTask4(coffees);
doTask5();

function doTask3(coffees) {
  alert("Задание #3");

  const coffeeName = prompt("Поиск кофе по названию:").trim();

  const coffeeIndex = coffees.findIndex(
    (coffee) => coffee.toLowerCase() === coffeeName.toLowerCase()
  );

  alert(
    coffeeIndex < 0
      ? "К сожалению, такого вида кофе нет в наличии"
      : `Держите ваш любимый кофе ${coffeeName}. Он ${coffeeIndex + 1}-й по ` +
          `популярности в нашей кофейне.`
  );
}

function doTask4(coffees) {
  alert("Задание #4");
  const prices = [1.5, 1, 2];

  const updatedPrices = prices.map((price) => (price += price * 0.5));

  updatedPrices.forEach((price, idx) => {
    alert(`Кофе ${coffees[idx]} сейчас стоит ${price} евро`);
  });
}

function doTask5() {
  alert("Задание #5");
  const clientsEstimations = [];

  const askClientToGiveEstimation = () =>
    Number(prompt("Как вы оцениваете нашу кофейню от 1 до 10?").trim());

  const addEstimation = (estimation) =>
    estimation > 0 && estimation <= 10 && clientsEstimations.push(estimation);

  for (let i = 0; i < 5; i++) {
    addEstimation(askClientToGiveEstimation());
  }

  let goodEstimations = clientsEstimations.filter((value) => value > 5).length,
    notGoodEstimations = clientsEstimations.filter(
      (value) => value <= 5
    ).length;

  alert(
    `Всего положительных оценок: ${goodEstimations};` +
      ` Всего отрицательных оценок: ${notGoodEstimations}`
  );
}
