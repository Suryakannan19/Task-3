let display = document.getElementById('display');
let currentInput = '';

function calculate(event) {
    if (event) {
        currentInput += event.target.textContent;
        display.value = currentInput;
    } else {
        try {
            const result = evaluateExpression(currentInput);
            display.value = result;
            currentInput = result.toString(); // Store the result for further calculations
        } catch (error) {
            display.value = 'Error';
            currentInput = '';
        }
    }
}

function clearDisplay() {
    display.value = '';
    currentInput = '';
}


function evaluateExpression(expression) {
    const operators = ['+', '-', '*', '/'];
    const numbers = expression.split(/[\+\-\*\/]/).map(Number);
    const operations = expression.split('').filter(char => operators.includes(char));

    let result = numbers[0];

    for (let i = 0; i < operations.length; i++) {
        const nextNumber = numbers[i + 1];

        switch (operations[i]) {
            case '+':
                result += nextNumber;
                break;
            case '-':
                result -= nextNumber;
                break;
            case '*':
                result *= nextNumber;
                break;
            case '/':
                if (nextNumber === 0) {
                    throw new Error('Division by zero');
                }
                result /= nextNumber;
                break;
            default:
                throw new Error('Invalid operator');
        }
    }

    return result;
}


