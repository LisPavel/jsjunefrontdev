let javaScriptDescription =
  "JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.";

javaScriptDescription = javaScriptDescription
  .slice(0, Math.floor(javaScriptDescription.length / 2))
  .replaceAll("а", "А")
  .trim()
  .repeat(3);

console.log(
  javaScriptDescription[Math.floor(javaScriptDescription.length / 2)],
  javaScriptDescription
);
