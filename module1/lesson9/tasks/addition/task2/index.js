function getMathResult(expression = []) {
  const errorText = "Ошибка";

  if (expression.length > 3) expression = getCorrectExpression(expression);
  if (expression.length < 3) return errorText;

  let [operand1, operator, operand2] = expression;

  if (isNaN(Number(operand1)) || isNaN(operand2)) return errorText;

  switch (operator) {
    case "+":
      return Number(operand1) + Number(operand2);
    case "-":
      return Number(operand1) - Number(operand2);
    case "*":
      return Number(operand1) * Number(operand2);
    case "/":
      return Number(operand1) / Number(operand2);
    case "=":
      return Number(operand1) === Number(operand2);
    case "<":
      return Number(operand1) < Number(operand2);
    case ">":
      return Number(operand1) > Number(operand2);
    default:
      return errorText;
  }
}

const isOperator = (operator = "") => /^[+\-*\/=<>]{1}$/.test(operator);

function getCorrectExpression(expression = []) {
  return expression.filter(
    (value) => !isNaN(Number(value)) || isOperator(value)
  );
}

console.log("500 === ", getMathResult(["200", "+", 300])); // 500
console.log("15 === ", getMathResult(["20", "-", "5"])); // 15
console.log("1 === ", getMathResult([100, "/", 100])); // 1
console.log("0 === ", getMathResult([2, "-", 2])); // 0
console.log("false === ", getMathResult(["5", ">", "10"])); // false
console.log("true === ", getMathResult(["5", "<", "10"])); // true
console.log("true === ", getMathResult(["1", "=", 1])); // true
console.log("'Ошибка' === ", getMathResult(["1", "**", 1])); // 'Ошибка'
console.log(
  "104 === ",
  getMathResult(["100", "hello", "javascript", , "help200", "+", 4])
); // 104
