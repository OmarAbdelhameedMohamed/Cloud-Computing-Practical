import { add, subtract, multiply, divide, percent, sqrt } from "./calculator.js";

const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let currentInput = "0";
let operator = null;
let firstValue = null;

function updateDisplay() {
  display.textContent = currentInput;
}

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.textContent;

    if (!isNaN(value) || value === ".") {
      if (currentInput === "0" && value !== ".") {
        currentInput = value;
      } else {
        currentInput += value;
      }
      updateDisplay();
    }

    else if (["+", "−", "×", "÷"].includes(value)) {
      operator = value;
      firstValue = parseFloat(currentInput);
      currentInput = "0";
    }

    else if (value === "=") {
      if (operator && firstValue !== null) {
        const secondValue = parseFloat(currentInput);
        let result = 0;

        switch (operator) {
          case "+": result = add(firstValue, secondValue); break;
          case "−": result = subtract(firstValue, secondValue); break;
          case "×": result = multiply(firstValue, secondValue); break;
          case "÷": 
            try {
              result = divide(firstValue, secondValue);
            } catch (e) {
              result = "Error";
            }
            break;
        }

        currentInput = String(result);
        operator = null;
        firstValue = null;
        updateDisplay();
      }
    }

    else if (value === "C") {
      currentInput = "0";
      operator = null;
      firstValue = null;
      updateDisplay();
    }

    else if (value === "CE") {
      currentInput = "0";
      updateDisplay();
    }

    else if (value === "%") {
      currentInput = String(percent(parseFloat(currentInput)));
      updateDisplay();
    }

    else if (value === "√") {
      try {
        currentInput = String(sqrt(parseFloat(currentInput)));
      } catch (e) {
        currentInput = "Error";
      }
      updateDisplay();
    }
  });
});

updateDisplay();
