// Feature Request:

// Array Manipulation Script: Write a script that demonstrates the creation of an array, adding and removing elements using push, pop, shift, and unshift methods.

let array = [1, 2, 3];
console.log("Original Array:", array);

array.push(4);
console.log("After push:", array);

array.pop();
console.log("After pop:", array);

array.shift();
console.log("After shift:", array);

array.unshift(0);
console.log("After unshift:", array);

// Array Transformation Script: Create a script that uses map, filter, and reduce methods to transform and aggregate array data.

let arr = [1, 2, 3, 4, 5];

let mappedArr = arr.map(num => num * 2);
console.log("Mapped Array:", mappedArr);

let filteredArr = arr.filter(num => num % 2 === 0);
console.log("Filtered Array:", filteredArr);

let reducedSum = arr.reduce((acc, num) => acc + num, 0);
console.log("Reduced Sum:", reducedSum);

// Array Iteration Script: Write a script that iterates over an array using both for loop and forEach method and logs each element.

let arrToIterate = [1, 2, 3, 4, 5];

console.log("Using for loop:");
for (let i = 0; i < arrToIterate.length; i++) {
    console.log(arrToIterate[i]);
}

console.log("Using forEach:");
arrToIterate.forEach(num => console.log(num));

// Two-dimensional Array Script: Create a script that demonstrates the creation and manipulation of a two-dimensional array.

let twoDimArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log("Two-dimensional Array:", twoDimArray);

let element = twoDimArray[2][1];
console.log("Specific Element:", element);
