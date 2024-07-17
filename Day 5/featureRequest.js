// Feature Request:

// Even or Odd Function Script: Write a script that includes a function to check if a number is even or odd and logs the result.

function checkEvenOdd(num) {
    if (num % 2 === 0) {
        console.log(`${num} is even`);
    } else {
        console.log(`${num} is odd`);
    }
}

checkEvenOdd(5);
checkEvenOdd(8);

// Square Calculation Function Script: Create a script that includes a function to calculate the square of a number and returns the result.

function calculateSquare(num) {
    return num * num;
}

console.log(calculateSquare(4));
console.log(calculateSquare(7));

// Concatenation Function Script: Write a script that includes a function to concatenate two strings and returns the result.

const concatenateStrings = function(str1, str2) {
    return str1 + str2;
};

console.log(concatenateStrings("Hello, ", "world!"));

// Sum Calculation Arrow Function Script: Create a script that includes an arrow function to calculate the sum of two numbers and returns the result.

const sumNumbers = (num1, num2) => num1 + num2;

console.log(sumNumbers(5, 10));
console.log(sumNumbers(3, 7));

// Higher-Order Function Script: Write a script that includes a higher-order function to apply a given function multiple times.

function applyFunctions(fn1, fn2, value) {
    return fn2(fn1(value));
}

const addOne = num => num + 1;
const double = num => num * 2;
console.log(applyFunctions(addOne, double, 5));