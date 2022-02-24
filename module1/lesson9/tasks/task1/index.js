const peopleWaiting = [
  "Кристина",
  "Олег",
  "Кирилл",
  "Мария",
  "Светлана",
  "Артем",
  "Глеб",
];

const giveParcel = (clients) => {
  const client = clients.shift();
  const clientsAmount = clients.length;
  alert(
    `${client} получил(а) посылку. В очереди ` +
      `осталось ${clientsAmount} человек.`
  );
};

const leaveQueueWithoutParcel = (clients) => {
  const client = clients.pop();
  alert(`${client} не получил(а) посылку и ушел(ла) из очереди`);
};

for (let i = 0; i < 3; i++) {
  giveParcel(peopleWaiting);
}

while (peopleWaiting.length > 0) {
  leaveQueueWithoutParcel(peopleWaiting);
}
