// task 1
const myName = "Pavel L";
const programmingLanguage = "JavaScript";
const courseCreatorName = "Владилен Минин";
const reasonText = "Мне нравится веб разработка";
const numberOfMonths = "3";

let myInfoText = `Всем привет! Меня зовут, ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}.

Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал(а) ${programmingLanguage} ${numberOfMonths} месяцев. Я уверен(а), что пройду данный курс до конца!`;

console.log(myInfoText);

// task 2

myInfoText = myInfoText.replaceAll("JavaScript", "JavaScript".toUpperCase());
console.log(
  myInfoText,
  myInfoText.length,
  myInfoText[0],
  myInfoText[myInfoText.length - 1]
);
