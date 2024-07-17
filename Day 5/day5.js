// Day 5: Functions

// Tasks/Activities:
// Activity 1: Function Declaration

// Task 1: Write a function to check if a number is even or odd and log the result to the console.

function checkEvenOdd(num) {
    if (num % 2 === 0) {
        console.log(`${num} is even`);
    } else {
        console.log(`${num} is odd`);
    }
}

checkEvenOdd(5);
checkEvenOdd(8);

// Task 2: Write a function to calculate the square of a number and return the result.

function calculateSquare(num) {
    return num * num;
}

console.log(calculateSquare(4));
console.log(calculateSquare(7));


// Activity 2: Function Expression

// Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.

const findMax = function(num1, num2) {
    const max = num1 > num2 ? num1 : num2;
    console.log(`The maximum of ${num1} and ${num2} is ${max}`);
};

findMax(5, 10);
findMax(12, 3);

// Task 4: Write a function expression to concatenate two strings and return the result.

const concatenateStrings = function(str1, str2) {
    return str1 + str2;
};

console.log(concatenateStrings("Hello, ", "world!"));


// Activity 3: Arrow Functions

// Task 5: Write an arrow function to calculate the sum of two numbers and return the result.

const sumNumbers = (num1, num2) => num1 + num2;

console.log(sumNumbers(5, 10));
console.log(sumNumbers(3, 7));

// Task 6: Write an arrow function to check if a string cintains a specific character and return a boolean value.

const containsCharacter = (str, char) => str.includes(char);

console.log(containsCharacter("Hello, world!", "w"));
console.log(containsCharacter("JavaScript", "x"));


// Activity 4: Function Parameters and Default Values

// Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.

function multiplyNumbers(num1, num2 = 1) {
    return num1 * num2;
}

console.log(multiplyNumbers(5, 2));
console.log(multiplyNumbers(7));

// Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.

function greetPerson(name, age = 30) {
    return `Hello, ${name}! You are ${age} years old.`;
}

console.log(greetPerson("Alice", 25));
console.log(greetPerson("Bob"));


// Activity 4: Higher-Order Functions

// Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.

function repeatFunction(fn, times) {
    for (let i = 0; i < times; i++) {
        fn();
    }
}

repeatFunction(() => console.log("Hello!"), 3);

// Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.

function applyFunctions(fn1, fn2, value) {
    return fn2(fn1(value));
}

const addOne = num => num + 1;
const double = num => num * 2;
console.log(applyFunctions(addOne, double, 5));

// Day 5 Completed...