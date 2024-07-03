const display = document.getElementById('display');
let firstOperand = '';
let operator = '';
let secondOperand = '';
let result = '';

function appendToDisplay(value) {
    if (value === '+' || value === '-' || value === '*' || value === '/') {
        if (operator !== '') {
            calculate();
        }
        operator = value;
    } else if (value === '=') {
        calculate();
        operator = '';
    } else if (value === 'C') {
        clearDisplay();
        operator = '';
    } else {
        if (operator === '') {
            firstOperand += value;
            display.value = firstOperand;
        } else {
            secondOperand += value;
            display.value = secondOperand;
        }
    }
}

function calculate() {
    const num1 = parseFloat(firstOperand);
    const num2 = parseFloat(secondOperand);
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = 'Erro: Divisão por zero';
            }
            break;
        default:
            return;
    }
    display.value = result;
    firstOperand = result.toString();
    secondOperand = '';
}

function clearDisplay() {
    display.value = '';
    firstOperand = '';
    secondOperand = '';
    result = '';
}
