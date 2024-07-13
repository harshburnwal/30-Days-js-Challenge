// Day 1: Variables and Data Types

// Tasks/Activities:
// Activity 1: Variable Declaration

// Task 1: Declare a variable using var, assign it a number, and log the value to the console.

var varNum = 108;
console.log(varNum);

// Task 2: Declare a variable using let, assign it a string, and log the value to the console.

let firstName = "Harsh";
console.log(firstName);

// Activity 2: Constant Declaration

// Task 3: Declare a variable using const, assign it a boolean value, and log the value to the console.

const isMountainsCool = true;
console.log("isMountainsCool: " + isMountainsCool);

// Activity 3: Data Types

// Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.

let name = "Harsh";
console.log(`Type of name: ${name} is ${typeof name}`);

let age = 22;
console.log(`Type of age: ${age} is ${typeof age}`);

let isVoter = true;
console.log(`Type of isVoter: ${isVoter} is ${typeof isVoter}`);

let details = {
    country: "India",
    isProgrammer: true,
    lastCGPA: 8.74,
    hobby: "Writing"
}
console.log(details);
console.log(`Type of details is ${typeof details}`);


let arr = [2, 4, 3, "Hello Ji", 56];
console.log(`Type of arr: ${arr} is ${typeof arr}`);

// Activity 4: Reassigning Variables

// Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.

let subject = "Physics";
console.log("Subject = " + subject);
subject = "CSE";
console.log("Updated Subject = " + subject);

// Activity 5: Understanding const

// Task 6: Try reassigning a variable declared with const and observe the error.

const pi = 3.14;
pi = 3.1415;
console.log(pi);


// Day - 1 Completed...