const password = prompt("Введите пароль").trim();

let message =
  password.length < 3 ||
  password.length > 20 ||
  !/[A-Z]/.test(password) ||
  !/\d/.test(password)
    ? "Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз."
    : "Пароль валидный. Добро пожаловать в аккаунт!";

alert(message);
