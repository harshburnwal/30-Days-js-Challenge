// Day 13: Modules

// Tasks/Activities:
// Activity 1: Creating and Exporting Modules

// Task 1: Create a module that exports a function to add two numbers. Import and use this module in another script.

// additionModule.js
export function add(a, b) {
    return a + b;
}
// main.js
import { add } from './additionModule.js';
const result = add(2, 3);
console.log(`The result of adding 2 and 3 is ${result}`);

// Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.

// personModule.js
export const person = {
    name: 'John Doe',
    age: 30,
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};
// main.js
import { person } from './personModule.js';
person.greet();


// Activity 2: Named and Default Exports

// Task 3: Create a module that exports multiple functions using named exports. Import and use these functions in another script.

// mathModule.js
export function add(a, b) {
    return a + b;
}
export function subtract(a, b) {
    return a - b;
}
// main.js
import { add, subtract } from './mathModule.js';
console.log(`Add: ${add(5, 3)}`);
console.log(`Subtract: ${subtract(5, 3)}`);

// Task 4: Create a module that exports a single function using default export. Import and use this function in another script.

// defaultModule.js
export default function multiply(a, b) {
    return a * b;
}
// main.js
import multiply from './defaultModule.js';
console.log(`Multiply: ${multiply(5, 3)}`);


// Activity 3: Importing Entire Modules

// Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.

// utilityModule.js
export const PI = 3.14;
export const E = 2.71;
export function square(x) {
    return x * x;
}
export function cube(x) {
    return x * x * x;
}
// main.js
import * as utils from './utilityModule.js';
console.log(`PI: ${utils.PI}`);
console.log(`E: ${utils.E}`);
console.log(`Square: ${utils.square(4)}`);
console.log(`Cube: ${utils.cube(3)}`);


// Activity 4: Using Third-Party Modules

// Task 6: Install a third-party module (e.g., lodash) using npm. Import and use a function from this module in a script.

// main.js
import _ from 'lodash';
const array = [1, 2, 3, 4, 5];
console.log(`First element: ${_.first(array)}`);
console.log(`Last element: ${_.last(array)}`);

// Task 7: Install a third-party module (e.g., axios) using npm. Import and use this module to make a network request in a script.

// main.js
import axios from 'axios';
axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });


// Activity 5: Module Bundling (Optional)

// Task 8: Use a module bundler like Webpack or Parcel to bundle multiple JavaScript files into a single file. Write a script to demonstrate the bundling process.

// webpack.config.js
const path = require('path');
module.exports = {
    entry: './main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development'
};

// Day 13 Completed...