// Feature Request:

// Basic Error Handling Script: Write a script that demonstrates basic error handling using try-catch and finally blocks.

function basicErrorHandling() {
    try {
        console.log("Starting the try block...");
        throw new Error("An intentional error occurred");
    } catch (error) {
        console.log("Caught an error in the catch block:", error.message);
    } finally {
        console.log("Executing the finally block...");
    }
}

basicErrorHandling();

// Custom Error Script: Create a script that defines and throws custom errors, handling them with try-catch blocks.

class MyCustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "MyCustomError";
    }
}

function customErrorHandling() {
    try {
        throw new MyCustomError("This is a custom error!");
    } catch (error) {
        console.log("Caught an error:", error.name, "-", error.message);
    } finally {
        console.log("Cleanup if necessary");
    }
}

customErrorHandling();

// Promise Error Handling Script: Write a script that handles errors in promises using .catch() and try-catch within async functions.

function createPromise() {
    return new Promise((resolve, reject) => {
        const success = Math.random() > 0.5;
        setTimeout(() => {
            if (success) {
                resolve("Promise resolved successfully");
            } else {
                reject(new Error("Promise rejected"));
            }
        }, 1000);
    });
}

// Using .catch() for promise error handling
createPromise()
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log("Caught an error using .catch():", error.message);
    });

// Using try-catch within async function for promise error handling
async function handlePromise() {
    try {
        const message = await createPromise();
        console.log(message);
    } catch (error) {
        console.log("Caught an error using try-catch:", error.message);
    }
}

handlePromise();

// Fetch Error Handling Script: Create a script that handles errors when using the fetch API to request data from invalid URLs.

// Using .catch() for fetch error handling
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
        console.log("Caught a fetch error using .catch():", error.message);
    });

// Using try-catch within async function for fetch error handling
async function fetchData() {
    try {
        const response = await fetch("https://invalidurl.com");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Caught a fetch error using try-catch:", error.message);
    }
}

fetchData();

// Day 12 Completed...