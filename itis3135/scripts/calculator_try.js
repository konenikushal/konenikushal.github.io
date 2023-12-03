let operation = '';
let currentInput = '';
let lastOperator = '';
let resultDisplayed = false;

function press(num) {
    if (currentInput === '' && num === '.') {
        currentInput = '0.';
    } else if (currentInput.includes('.') && num === '.') {
        return;
    } else {
        currentInput += num;
    }
    document.getElementById('display').value = currentInput;
    resultDisplayed = false;
}

function setOperator(operator) {
    if (lastOperator && !resultDisplayed) {
        calculate();
    }

    if (currentInput) {
        operation += currentInput;
    }

    operation += operator;
    lastOperator = operator;
    currentInput = '';
    resultDisplayed = false;
}

function calculate() {
    if (currentInput) {
        operation += currentInput;
    }

    let result = Function("return " + operation)();
    document.getElementById('display').value = result;
    currentInput = result;
    operation = '';
    lastOperator = '';
    resultDisplayed = true;
}

function clearDisplay() {
    operation = '';
    currentInput = '';
    lastOperator = '';
    document.getElementById('display').value = '';
    resultDisplayed = false;
}
