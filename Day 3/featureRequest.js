// Feature Request:

// Number Check Script: Write a script that checks if a number is positive, negative, or zero using if-else statements and logs the result.

let number = 5;

if (number > 0) {
    console.log(`${number} is positive.`);
} else if (number < 0) {
    console.log(`${number} is negative.`);
} else {
    console.log(`${number} is zero.`);
}

// Voting Eligibility Script: Create a script to check if a person is eligible to vote based on their age and log the result.

let age = 20;

if (age >= 18) {
    console.log("Can vote.");
} else {
    console.log("Can't vote.");
}

// Day of the Week Script: Write a script that uses a switch case to determine the day of the week based on a number (1-7) and logs the day name.

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

// Grade Assignment Script: Create a script that uses a switch case to assign a grade based on a score and logs the grade.

let score = 68;

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

// Leap Year Check Script: Write a script that checks if a year is a leap year using multiple conditions and logs the result.

let year = 2024;

let isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

if (isLeapYear) {
    console.log(`${year} is a leap year.`);
} else {
    console.log(`${year} is not a leap year.`);
}