let number1 = "";
let operator = "";
let number2 = "";

const digitBtn = document.querySelectorAll(".digit");
const display = document.querySelector("#display");
const operatorBtn = document.querySelectorAll(".operator"); 
const equalBtn = document.querySelector(".equal");

operatorBtn.forEach((button) => {
    button.addEventListener("click", () => {
        display.textContent += button.textContent;
        operator = button.textContent;
    })
})

digitBtn.forEach((button) => {
    button.addEventListener("click", () => {
        // console.log(button.textContent);

        //display.append(button.textContent);
        display.textContent += button.textContent;

        if (!operator) {
            number1 += button.textContent;
        } else {        
            number2 += button.textContent;
        }
    })
})

equalBtn.addEventListener("click", () => {
    const result = operate(Number(number1), operator, Number(number2));
    console.log(result);

    display.textContent = "";
    display.append(result.toFixed(4)); // Round the number
});

function operate(number1, operator, number2) {
    switch (operator) {
        case "+":
            return Add(number1, number2);
            break;

        case "-":
            return Subtract(number1, number2);
            break;

        case "*":
            return Multiply(number1, number2);
            break;

        case "/":
            return Divide(number1, number2);
            break;
    }
}

function Add(num1, num2){
    return num1 + num2;
}

function Subtract(num1, num2){
    return num1 - num2;
}

function Multiply(num1, num2){
    return num1 * num2;
}

function Divide(num1, num2){
    return num1 / num2;
}
