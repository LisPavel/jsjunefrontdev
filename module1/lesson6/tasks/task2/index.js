const correctAnswer1 = 2 + 2;
const correctAnswer2 = 2 * 2;
const correctAnswer3 = 5 - 3 - 1;
const correctAnswer4 = 10 - 2 - 1 + 5;
const correctAnswer5 = 2 + 2 * 2;

let correctAnswersCounter = 0;
let incorrectAnswersCounter = 0;

const answer1 = Number(prompt("Сколько будет 2 + 2?").trim());
alert(answer1 === correctAnswer1 ? "Ответ Верный" : "Ответ Неверный");
answer1 === correctAnswer1
  ? correctAnswersCounter++
  : incorrectAnswersCounter++;

const answer2 = Number(prompt("Сколько будет 2 * 2?").trim());
alert(answer2 === correctAnswer2 ? "Ответ Верный" : "Ответ Неверный");
answer2 === correctAnswer2
  ? correctAnswersCounter++
  : incorrectAnswersCounter++;

const answer3 = Number(
  prompt(
    "У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?"
  ).trim()
);
alert(answer3 === correctAnswer3 ? "Ответ Верный" : "Ответ Неверный");
answer3 === correctAnswer3
  ? correctAnswersCounter++
  : incorrectAnswersCounter++;

const answer4 = Number(
  prompt(
    "У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?"
  ).trim()
);
alert(answer4 === correctAnswer4 ? "Ответ Верный" : "Ответ Неверный");
answer4 === correctAnswer4
  ? correctAnswersCounter++
  : incorrectAnswersCounter++;

const answer5 = Number(prompt("Сколько будет 2 + 2 * 2?").trim());
alert(answer5 === correctAnswer5 ? "Ответ Верный" : "Ответ Неверный");
answer5 === correctAnswer5
  ? correctAnswersCounter++
  : incorrectAnswersCounter++;

alert(
  `Конец теста! Правильные ответы - ${correctAnswersCounter}; Неправильные ответы - ${incorrectAnswersCounter}.`
);
