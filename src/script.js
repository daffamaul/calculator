const buttons = document.querySelectorAll("button");
const display = document.querySelector(".display");

function add(num1, num2) {
  return num1 + num2;
}

function substract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function mod(num1, num2) {
  return num1 % num2;
}

function operate(operator, num1, num2) {
  let result;

  switch (operator) {
    case "+":
      result = add(num1, num2);
      break;
    case "-":
      result = substract(num1, num2);
      break;
    case "*":
      result = multiply(num1, num2);
      break;
    case "/":
      result = divide(num1, num2);
      break;
    case "%":
      result = mod(num1, num2);
      break;

    default:
      break;
  }

  return result;
}

let num1 = "",
  operator = "",
  num2 = "",
  result;

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const target = event.target;

    // Calculate
    if (target.id === "=") {
      result = operate(operator, Number(num1), Number(num2));

      display.textContent = result;

      num1 = result ?? "";
      num2 = operator = "";
    } else if (target.id === "ac") {
      num1 = num2 = operator = "";
      display.textContent = 0;
    }

    // Initial value for num1, operator & num2
    if (num1 !== "" && operator !== "" && target.classList[0] === "number") {
      num2 += target.id;
      display.textContent = num2;
    } else if (target.classList[0] === "number") {
      num1 += target.id;
      display.textContent = num1;
    } else if (
      target.id !== "=" &&
      target.id !== "." &&
      target.id !== "e" &&
      target.id !== "back" &&
      target.id !== "ac"
    ) {
      operator = target.id;
      display.textContent = operator;
    }
  });
});
