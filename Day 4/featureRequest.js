// Feature Request:

// Number Printing Script: Write a script that prints numbers from 1 to 10 using a for loop and a while loop.

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Multiplication Table Script: Create a script that prints the multiplication table of 5 using a for loop.

let number = 5;
for (let i = 1; i <= 10; i++) {
    console.log(`${number} * ${i} = ${number * i}`);
}

// Pattern Printing Script: Write a script that prints a pattern of stars using nested loops.

for (let m = 1; m <= 5; m++) {
    let pattern = '';
    for (let n = 1; n <= m; n++) {
        pattern += '* ';
    }
    console.log(pattern);
}

// Sum Calculation Script: Write a script that calculates the sum of numbers from 1 to 10 using a while loop.

let sum = 0;
let i = 1;
while (i <= 10) {
    sum += i;
    i++;
}
console.log(`Sum: ${sum}`);

// Factorial Calculation Script: Create a script that calculates the factorial of a number using a do...while loop.

let num = 5;
let factorial = 1;
let l = num;
do {
    factorial *= l;
    l--;
} while (l > 0);
console.log(`Factorial of ${num}: ${factorial}`);