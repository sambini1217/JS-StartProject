const dfltResult = 0;
let currentResult = 0;

function add(oprnd1, oprnd2) {
    const result = oprnd1 + oprnd2;
    return result;
}

currentResult = currentResult + 10;
let calcDescription = `(${dfltResult} + 10)`;

currentResult = add(1, 2);
outputResult(currentResult, calcDescription);