const existedUserLogin = "the_best_user";
const existedUserPassword = "12345678";

const login = prompt("Введите логин").trim();
const password = prompt("Введите пароль").trim();

const infoMessage =
  existedUserLogin === login && existedUserPassword === password
    ? `Добро пожаловать, ${login}!`
    : "Логин и (или) Пароль введены неверно!";

alert(infoMessage);
