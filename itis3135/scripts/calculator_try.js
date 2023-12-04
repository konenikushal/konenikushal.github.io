let operation = '';
let currentInput = '';
let lastOperator = '';
let resultDisplayed = false;

document.addEventListener('DOMContentLoaded', function() {
    const keys = document.getElementById('keys').getElementsByTagName('button');
    const buttonValues = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+', 'C'];

    for (let i = 0; i < keys.length; i++) {
        keys[i].addEventListener('click', function() {
            const value = buttonValues[i];
            if (value === 'C') {
                clearDisplay();
            } else if (['/', '*', '-', '+'].includes(value)) {
                setOperator(value);
            } else if (value === '=') {
                calculate();
            } else {
                press(value);
            }
        });
    }
});

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
    if (!currentInput) {
        currentInput = document.getElementById('display').value;
    }

    if (!lastOperator) {
        operation = currentInput + operator;
        lastOperator = operator;
        currentInput = '';
    }
}

function calculate() {
    if (currentInput) {
        operation += currentInput;
        let result = Function("return " + operation)();
        document.getElementById('display').value = result;
        operation = result.toString();
        currentInput = '';
        lastOperator = '';
    }
}

function clearDisplay() {
    operation = '';
    currentInput = '';
    lastOperator = '';
    document.getElementById('display').value = '';
    resultDisplayed = false;
}