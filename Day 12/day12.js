// Day 12: Error Handling

// Tasks/Activities:
// Activity 1: Basic Error Handling with Try-Catch

// Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.

function throwError() {
    throw new Error("This is an intentional error!");
}

try {
    throwError();
} catch (error) {
    console.log("Caught an error:", error.message);
}

// Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.

function divideNumbers(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero!");
    }
    return a / b;
}

try {
    console.log(divideNumbers(10, 0));
} catch (error) {
    console.log("Error:", error.message);
}


// Activity 2: Finally Block

// Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.

try {
    console.log("In the try block");
    throw new Error("An error occurred!");
} catch (error) {
    console.log("In the catch block:", error.message);
} finally {
    console.log("In the finally block");
}

// Activity 3: Custom Error Objects

// Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.

class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}

function throwCustomError() {
    throw new CustomError("This is a custom error!");
}

try {
    throwCustomError();
} catch (error) {
    console.log("Caught an error:", error.name, "-", error.message);
}

// Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.

class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

function validateInput(input) {
    if (!input) {
        throw new ValidationError("Input cannot be empty!");
    }
    return true;
}

try {
    validateInput("");
} catch (error) {
    console.log("Error:", error.name, "-", error.message);
}


// Activity 4: Error Handling in Promises

// Task 6: Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message to the console.

function randomPromise() {
    return new Promise((resolve, reject) => {
        const isSuccess = Math.random() > 0.5;
        setTimeout(() => {
            if (isSuccess) {
                resolve("Promise resolved!");
            } else {
                reject(new Error("Promise rejected!"));
            }
        }, 1000);
    });
}

randomPromise()
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log("Caught an error:", error.message);
    });

// Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.

async function handleRandomPromise() {
    try {
        const message = await randomPromise();
        console.log(message);
    } catch (error) {
        console.log("Caught an error:", error.message);
    }
}

handleRandomPromise();


// Activity 5: Graceful Error Handling in Fetch

// Task 8: Use the fetch API to request data from an invalid URL and handle the error using .catch(). Log an appropriate error message to the console.

fetch("https://invalidurl.com")
    .then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log("Fetch error:", error.message);
    });

// Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.

async function fetchData() {
    try {
        const response = await fetch("https://invalidurl.com");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Fetch error:", error.message);
    }
}

fetchData();

// Day 12 Completed...