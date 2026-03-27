let number1;
let operator;
let number2;

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
