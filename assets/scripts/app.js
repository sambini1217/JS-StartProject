const dfltResult = 0;
let currentResult = 0;

function getUserInputsAsNumber() {
    return parseInt(userInput.value);
}

function createAndWriteDescription(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

function add() {
    const enteredNumber = getUserInputsAsNumber();
    const initialResult = currentResult;
    currentResult = currentResult + enteredNumber;
    createAndWriteDescription('+', initialResult, enteredNumber);
}

function subtract() {
    const enteredNumber = getUserInputsAsNumber();
    const initialResult = currentResult;
    currentResult = currentResult - enteredNumber;
    createAndWriteDescription('-', initialResult, enteredNumber);
}

function multiply() {
    const enteredNumber = getUserInputsAsNumber();
    const initialResult = currentResult;
    currentResult = currentResult * enteredNumber;
    createAndWriteDescription('*', initialResult, enteredNumber);
}

function divide() {
    const enteredNumber = getUserInputsAsNumber();
    const initialResult = currentResult;
    currentResult = currentResult / enteredNumber;
    createAndWriteDescription('/', initialResult, enteredNumber);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);