// task 1

/* function calculateCubedSum(num) {
    return Math.pow(num, 3);
}

const result1 = calculateCubedSum(2);
const result2 = calculateCubedSum(3);

console.log(`${result1} + ${result2} = ${result1 + result2}`);
 */

//task 2

/* function calculateSalary(value) {
    if (isNaN(value)) {
        console.log("Значение задано неверно. Пожалуйста, введите число.");
    } else {
        const tax = value * 0.13;
        console.log(`Размер заработной платы за вычетом налогов равен ${value - tax}`);
    }
}

const userInput = prompt("Введите число:");
const inputValue = parseFloat(userInput);

calculateSalary(inputValue); */






//task 3

/* function findMaxValue(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}

const userInput1 = parseFloat(prompt("Введите первое число:"));
const userInput2 = parseFloat(prompt("Введите второе число:"));
const userInput3 = parseFloat(prompt("Введите третье число:"));

const maxValue = findMaxValue(userInput1, userInput2, userInput3);

console.log(`Максимальное значение среди введенных чисел: ${maxValue}`);
 */





//task 4

function sum(a, b) {
    return a + b;
}

function subtract(a, b) {
    return Math.max(a, b) - Math.min(a, b);
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return "Деление на ноль невозможно";
    }
}

console.log(sum(2, 6));       // Выведет: 8
console.log(subtract(6, 2));  // Выведет: 4
console.log(multiply(2, 6));  // Выведет: 12
console.log(divide(6, 2));    // Выведет: 3



