// Day 2: Operators

// Tasks/Activities:
// Activity 1: Arithmetic Operations


// Task 1: Write a program to add two numbers and log the result to the console.

let num1 = 15, num2 = 10, sum;
sum = num1 + num2;
console.log(`Sum of ${num1} and ${num2} is ${sum}.`);

// Task 2: Write a program to subtract two numbers and log the result to the console.

let subtract = num1 - num2;
console.log(`subtraction of ${num1} and ${num2} is ${subtract}.`);

// Task 3: Write a program to multiply two numbers and log the result to the console.

let multiply = num1 * num2;
console.log(`Multiplication of ${num1} and ${num2} is ${multiply}.`);

// Task 4: Write a program to divide two numbers and log the result to the console.

let divide = num1 / num2;
console.log(`Division of ${num1} and ${num2} is ${divide}.`);

// Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.

let remainder = num1 % num2;
console.log(`remainder of ${num1} and ${num2} is ${divide}.`);


// Activity 2: Assignment Operators

// Task 6: Use the += operator to add a number to a variable and log the result to the console.

let age = 20;
console.log(`age is ${age}`);
age += 2;
console.log(`Updated age after 2 years is ${age}`);

// Task 7: Use the -= operator to subtract a number from a variable and log the result to the console.

let score = 20;
console.log(`score is ${score}`);
score -= 5;
console.log(`Updated score after 5 losses is ${score}`);


// Activity 3: Comparison Operators

// Task 8: Write a program to compare two numbers using > and < and log the result to the console.

let n1 = 10, n2 = 20;

if (n1 > n2) {
    console.log(n1 + " is greater than " + n2);
} else if (n1 < n2) {
    console.log(n1 + " is less than " + n2);
} else {
    console.log(n1 + " is equal to " + n2);
}

// Task 9: Write a program to compare two numbers using >= and <= and log the result to the console.

let val1 = 456, val2 = 789;

if (val1 >= val2) {
    console.log(val1 + " is greater than and equal to " + val2);
} else if (val1 <= val2) {
    console.log(val1 + " is less than and equal to " + val2);
} else {
    console.log(val1 + " is equal to " + val2);
}

// Task 10: Write a program to compare two numbers using == and === and log the result to the console.

let number1 = 100;
let number2 = "100";

if (number1 == number2) {
    console.log(number1 + " is equal to " + number2 + " using ==");
} else {
    console.log(number1 + " is not equal to " + number2 + " using ==");
}

if (number1 === number2) {
    console.log(number1 + " is equal to " + number2 + " using ===");
} else {
    console.log(number1 + " is not equal to " + number2 + " using ===");
}


// Activity 4: Logical Operators

// Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.

if (num1 < 20 && num2 > 5) {
    console.log(`Both conditions are true: ${num1} is less than 20 and ${num2} is greater than 5.`);
} else {
    console.log("At least one condition is false.");
}

// Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.

if (num1 < 20 || num2 < 5) {
    console.log(`Either one condition is true: ${num1} is less than 20 or ${num2} is less than 5.`);
} else {
    console.log("both conditions are false.");
}

// Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.

let isSunny = false;

if (!isSunny) {
    console.log("It is not Sunny.");
} else {
    console.log("It is Sunny.");
}


// Activity 5: Ternary Operator

// Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.

let num = -200;
let result = (num >= 0) ? `${num} is positive.` : `${num} is negative.`;
console.log(result);