// Day 4: Loops

// Tasks/Activities:
// Activity 1: For Loop

// Task 1: Write a program to print numbers from 1 to 10 using a for loop.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Task 2: Write a program to print the multiplication table of 5 using a for loop.

let number = 5;
for (let i = 1; i <= 10; i++) {
    console.log(`${number} * ${i} = ${number * i}`);
}


// Activity 2: While Loop

// Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.

let sum = 0;
let i = 1;
while (i <= 10) {
    sum += i;
    i++;
}
console.log(`Sum: ${sum}`);

// Task 4: Write a program to print numbers from 10 to 1 using a while loop.

let j = 10;
while (j >= 1) {
    console.log(j);
    j--;
}


// Activity 3: Do...While Loop

// Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.

let k = 1;
do {
    console.log(k);
    k++;
} while (k <= 5);

// Task 6: Write a program to calculate the factorial of a number using a do...while loop.

let num = 5;
let factorial = 1;
let l = num;
do {
    factorial *= l;
    l--;
} while (l > 0);
console.log(`Factorial of ${num}: ${factorial}`);


// Activity 4: Nested Loops

// Task 7: Write a program to print a pattern using nested for loops:
// * 
// * * 
// * * * 
// * * * * 
// * * * * * 

for (let m = 1; m <= 5; m++) {
    let pattern = '';
    for (let n = 1; n <= m; n++) {
        pattern += '* ';
    }
    console.log(pattern);
}


// Activity 5: Loop Control Statements

// Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the `continue` statement.

for (let t = 1; t <= 10; t++) {
    if (t === 5) {
        continue;
    }
    console.log(t);
}

// Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the `break` statement.

for (let p = 1; p <= 10; p++) {
    if (p === 7) {
        break;
    }
    console.log(p);
}

// Day 4 Completed...