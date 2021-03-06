function getRandomNumberInRange(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const getWinner = (applicants, winnerObject) => {
  const tickets = Object.keys(applicants);
  const winnerTicket = tickets[getRandomNumberInRange(0, tickets.length)];
  return { ...applicants[winnerTicket], ...winnerObject };
};

const todaysWinner = {
  prize: "10 000$",
};

const winnerApplicants = {
  "001": {
    name: "Максим",
    age: 25,
  },
  201: {
    name: "Светлана",
    age: 20,
  },
  304: {
    name: "Екатерина",
    age: 35,
  },
};

const resultWinner = getWinner(winnerApplicants, todaysWinner);
console.log("resultWinner", resultWinner);
