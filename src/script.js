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
  if (num2 === 100) {
    return num1 / 100;
  } else {
    return num1 % num2;
  }
}

function operate(operator, num1, num2) {
  let result;

  switch (operator) {
    case "+":
      if (num2 === 0) num2 = 0;
      result = add(num1, num2);
      break;
    case "-":
      if (num2 === 0) num2 = 0;
      result = substract(num1, num2);
      break;
    case "*":
      if (num2 === 0) num2 = 1;
      result = multiply(num1, num2);
      break;
    case "/":
      if (num2 === 0) num2 = 1;
      result = divide(num1, num2);
      break;
    case "%":
      if (num2 === 0) num2 = 100;
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

    // console.log(num1, num2, result);

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
      target.id !== "ac" &&
      target.id !== "+/-"
    ) {
      operator = target.id;
      display.textContent = operator;
    }

    // Calculate
    if (target.id === "=") {
      result = operate(operator, Number(num1), Number(num2));

      display.textContent = result ?? "0";

      num1 = result ?? "";
      num2 = operator = "";
    } else if (target.id === "ac") {
      num1 = num2 = operator = "";
      display.textContent = "0";
    } else if (target.id === "back") {
      result = display.textContent.split("");

      if (result.length === 1) {
        display.textContent = "0";
        num1 = "";
      } else {
        result.pop();
        display.textContent = num1 = result.join("");
      }
    } else if (target.id === "+/-") {
      num1 = display.textContent.split("");

      if (!num1.includes("-")) {
        num1.unshift("-");
      } else {
        num1.shift();
      }

      display.textContent = num1 = num1.join("");
    } else if (target.id === ".") {
      if (!num1.includes(".")) {
        num1 += target.id;
        display.textContent = num1;
      } else if (!num2.includes(".")) {
        num2 += target.id;
        display.textContent = num2;
      }
    }
  });
});
