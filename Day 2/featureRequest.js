// Feature Request:

// Arithmetic Operations Script: Write a script that performs basic arithmetic operations (addition, subtraction, multiplication, division, remainder) on two numbers and logs the results.

let numb1 = 6
let numb2 = 5

const add =  numb1 + numb2;
const subt = numb1 - numb2;
const multi = numb1 * numb2;
const divi = numb1 / numb2;
const remain = numb1 % numb2;

const operations = [`add = ${add}, subtraction = ${subt}, multiplication = ${multi}, division = ${divi}, remainder = ${remain}`]
console.log(operations);

// Comparison and Logical Operators Script: Create a script that compares two numbers using different comparison operators and combines conditions using logical operators, logging the results.

// let numb1 = 6
// let numb2 = 5
console.log(`Comparison Results:`);
console.log(`number1 (${numb1}) > number2 (${numb2}):`, numb1 > numb2);
console.log(`number1 (${numb1}) < number2 (${numb2}):`, numb1 < numb2);
console.log(`number1 (${numb1}) >= number2 (${numb2}):`, numb1 >= numb2);
console.log(`number1 (${numb1}) <= number2 (${numb2}):`, numb1 <= numb2);
console.log(`number1 (${numb1}) === number2 (${numb2}):`, numb1 === numb2);
console.log(`number1 (${numb1}) !== number2 (${numb2}):`, numb1 !== numb2);

console.log(`\nCombining Conditions:`);
console.log(`(number1 > 5) && (number2 < 10):`, (numb1 > 5) && (numb2 < 10));
console.log(`(number1 > 5) || (number2 > 10):`, (numb1 > 5) || (numb2 > 10));
console.log(`!(number1 === 10):`, !(numb1 === 10));


// Ternary Operator Script: Write a script that uses the ternary operator to determine if a number is positive or negative and logs the result.

let number = -42;
let result = (number >= 0) ? `The number ${number} is positive.` : `The number ${number} is negative.`;
console.log(result);