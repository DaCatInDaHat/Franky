import { dropdown } from "./navigation.js"
const navBtn = document.querySelector("#nav-btn");
navBtn.onclick = dropdown;

const firstNumber = document.querySelector("#first-number");
const secondNumber = document.querySelector("#second-number");
const operator = document.querySelector("#operator");
const result = document.querySelector("#calc-result");
const calculate = document.querySelector("#calculate-btn");
calculate.onclick = () => {
    let x = Number(firstNumber.value);
    let y = Number(secondNumber.value);
    if (operator.value == "+") {
        result.value = x + y;
    }
    else if (operator.value == "-") {
        result.value = x - y;
    }
    else if (operator.value == "*") {
        result.value = x * y;
    }
    else if (operator.value == "/") {
        result.value = x / y;
    }
    else if (operator.value == "%") {
        result.value = x % y;
    }
    else if (operator.value == "**") {
        result.value = Math.pow(x, y);
    }
};
