let discount = 0.0;
const clientName = prompt("Введите имя клиента").trim();
let clientSpentToday = Number(
  prompt("Сколько клиент потратил сегодня?").trim()
);
let clientSpentForAllTime = Number(
  prompt("Сколько клиент потратил за все время?").trim()
);

if (isNaN(clientSpentToday) || isNaN(clientSpentForAllTime)) {
  alert(
    "Сумма, которую клиент потратил за все время и которую потратил сегодня, должна быть числом! Перезагрузите страницу, чтобы повторить попытку."
  );
} else {
  if (clientSpentForAllTime >= 100 && clientSpentForAllTime < 300) {
    discount = 0.1;
  } else if (clientSpentForAllTime >= 300 && clientSpentForAllTime < 500) {
    discount = 0.2;
  } else if (clientSpentForAllTime >= 500) {
    discount = 0.3;
  }

  alert(`Вам предоставляется скидка в ${discount * 100}%!`);

  clientSpentToday -= clientSpentToday * discount;
  clientSpentForAllTime += clientSpentToday;

  alert(
    `Спасибо, ${clientName}! К оплате ${clientSpentToday}$. За все время в нашем ресторане вы потратили ${clientSpentForAllTime}$.`
  );
}
