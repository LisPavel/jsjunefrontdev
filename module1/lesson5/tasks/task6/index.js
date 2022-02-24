const userText = prompt("Введите текст").trim();
const wordFromText = prompt("Введите слово из текста").trim();
const wordIndex = userText.indexOf(wordFromText);

alert(`Результат: ${userText.slice(0, wordIndex)}`);
