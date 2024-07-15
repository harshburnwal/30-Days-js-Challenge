// Activity 1: If-Else Statements

// Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.

let num = 15;

if (num > 0) {
    console.log("Positive");
} else if (num < 0) {
    console.log("Negative");
} else {
    console.log("Equals to 0");
}

// Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.

let age = 21;

if (age >= 18) {
    console.log("Can Vote");
} else {
    console.log("Can't Vote");
}


// Activity 2: Nested If-Else Statements

// Task 3: Write a program to find the largest of three numbers using nested if-else statements.

let num1 = 114;
let num2 = 49;
let num3 = 29;

if (num1 >= num2) {
    if (num1 >= num3) {
        console.log(`${num1} is largest.`);
    } else {
        console.log(`${num3} is largest.`);
    }
} else {
    if (num2 >= num3) {
        console.log(`${num2} is largest.`);
    } else {
        console.log(`${num3} is largest.`);
    }
}


// Activity 3: Switch Case

// Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.

let day = 3;

switch (day) {
    case 1:
        console.log("It's Sunday");
        break;
    case 2:
        console.log("It's Monday");
        break;
    case 3:
        console.log("It's Tuesday");
        break;
    case 4:
        console.log("It's Wednesday");
        break;
    case 5:
        console.log("It's Thursday");
        break;
    case 6:
        console.log("It's Friday");
        break;
    case 7:
        console.log("It's Saturday");
        break;
    default:
        console.log("Invalid day number. Please enter a number between 1 and 7.");
        break;
}

// Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.

let score = 75;

switch (true) {
    case (score >= 90 && score <= 100):
        console.log("Grade A");
        break;
    case (score >= 80 && score < 90):
        console.log("Grade B");
        break;
    case (score >= 70 && score < 80):
        console.log("Grade C");
        break;
    case (score >= 60 && score < 70):
        console.log("Grade D");
        break;
    case (score >= 0 && score < 60):
        console.log("Grade E");
        break;
    default:
        console.log("Invalid score. Please enter a score between 0 and 100.");
        break;
}


// Activity 4: Conditional (Ternary) Operator

// Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.

// let num = 15;
let result = (num % 2 == 0) ? "Even" : "Odd";
console.log(`Result is ${result}`);


// Activity 5: Combining Conditions

// Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.

let year = 2024;

let isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

if (isLeapYear) {
    console.log(`${year} is a leap year.`);
} else {
    console.log(`${year} is not a leap year.`);
}

// Day 3 Completed...