const askQuestion = (question) => prompt(question).trim();

const checkQuestionAnswer = (question, correctAnswer) => {
  const answer = askQuestion(question);
  alert(
    correctAnswer.toLowerCase() === answer.toLowerCase()
      ? "Ответ верный"
      : "Ответ неверный"
  );
};

checkQuestionAnswer("Арбуз это фрукт или ягода?", "Ягода");
checkQuestionAnswer("Сколько в среднем зубов у взрослого человека?", "32");
checkQuestionAnswer("Как называется самая маленькая птица в мире?", "Колибри");
