let number1 = "";
let operator = "";
let number2 = "";
let resetDisplay = false;

const digitBtn = document.querySelectorAll(".digit");
const display = document.querySelector("#display");
const operatorBtn = document.querySelectorAll(".operator"); 
const equalBtn = document.querySelector(".equal");
const clearBtn = document.querySelector(".clear");


operatorBtn.forEach((button) => {
    button.addEventListener("click", () => {
        if (resetDisplay === true ){
            number1 = display.textContent;
            number2 = "";
            resetDisplay = false;
        }
        if (number1 && operator && !number2) {
            operator = button.textContent;
        } else if (number1 && number2 && operator) {
            const result = operate(Number(number1), operator, Number(number2));
            console.log(result);
            // 
            display.textContent = "";
            display.append(Math.round(result * 100) / 100);
            number1 = result;
            number2 = "";
        }
        // Move these two down here fixed the problem somehow...
        display.textContent += button.textContent;
        operator = button.textContent;
    })
})

digitBtn.forEach((button) => {
    button.addEventListener("click", () => {
        // clear everything and start fresh, need to rewrite.
        if (resetDisplay == true) {
            display.textContent = "";
            number1 = "";
            operator = "";
            number2 = "";
            resetDisplay = false;
        }
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
    if (!number1 || !operator || !number2) {
        // Do nothing
    } else if (number2 == 0 && operator == "/") {
        display.textContent = "Can't divide by zero!";
        resetDisplay = true;
    } else {
        const result = operate(Number(number1), operator, Number(number2));
        console.log(result);

        display.textContent = "";
        display.append(Math.round(result * 100) / 100); // Round the number
        number1 = result;
        operator = "";
        number2 = "";
        resetDisplay = true;

    }
});

clearBtn.addEventListener("click", () => {
    number1 = "";
    operator = "";
    number2 = "";
    display.textContent = "";
})

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
