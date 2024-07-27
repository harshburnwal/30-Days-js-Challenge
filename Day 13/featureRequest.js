// Feature Request:

// Basic Module Script: Write a script that creates a module exporting a function and imports it in another script.

// basicModule.js
export function add(a, b) {
    return a + b;
}
// main.js
import { add } from './basicModule.js';
console.log(add(1, 2));

// Named and Default Exports Script: Create a script demonstrating both named and default exports and their usage.

// exportsModule.js
export function add(a, b) {
    return a + b;
}
export function subtract(a, b) {
    return a - b;
}
export default function multiply(a, b) {
    return a * b;
}
// main.js
import multiply, { add, subtract } from './exportsModule.js';
console.log(add(2, 3));
console.log(subtract(5, 2));
console.log(multiply(4, 3));

// Third-Party Module Script: Write a script that installs, imports, and uses functions from third-party modules like lodash and axios.

// main.js
import _ from 'lodash';
import axios from 'axios';

console.log(_.capitalize('hello world'));

axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

// Module Bundling Script: Create a script demonstrating how to bundle JavaScript files using a module bundler (optional).

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
