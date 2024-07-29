// Feature Request:

// Basic Closure Script: Write a script that demonstrates a basic closure with a function returning another function that accesses the outer function's variable.

function outer() {
    let outerVar = 'Outer variable';
    return function() {
        console.log(outerVar);
    };
}
const inner = outer();
inner();

// Counter Closure Script: Create a script that uses a closure to maintain a private counter with increment and get functions.

function counterClosure() {
    let count = 0;
    return {
        increment: function() {
            count++;
        },
        getCount: function() {
            return count;
        }
    };
}
const counter = counterClosure();
counter.increment();
counter.increment();
console.log(counter.getCount());  // Logs: 2

// Unique ID Generator Script: Write a script that generates unique IDs using a closure to keep track of the last generated ID.

function idGeneratorClosure() {
    let lastId = 0;
    return function() {
        lastId++;
        return lastId;
    };
}
const generateId = idGeneratorClosure();
console.log(generateId());
console.log(generateId());

// Loop Closure Script: Create a script that demonstrates closures in loops to ensure functions log the correct index.

function createFunctions() {
    const functions = [];
    for (let i = 0; i < 5; i++) {
        functions.push((function(index) {
            return function() {
                console.log(index);
            };
        })(i));
    }
    return functions;
}
const funcs = createFunctions();
funcs[0]();
funcs[1]();
funcs[2]();
funcs[3]();
funcs[4]();

// Memoization Script: Write a script that memoizes the results of a function and demonstrates it with a factorial calculation.

function memoizeFunction(fn) {
    const cache = {};
    return function(...args) {
        const key = JSON.stringify(args);
        if (cache[key]) {
            return cache[key];
        } else {
            const result = fn(...args);
            cache[key] = result;
            return result;
        }
    };
}
const memoizedFactorialFn = memoizeFunction(function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
});
console.log(memoizedFactorialFn(5));
console.log(memoizedFactorialFn(5));

// Day 15 Completed...