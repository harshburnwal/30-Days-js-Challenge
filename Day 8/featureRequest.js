// Feature Request:

// Template Literals Script: Write a script that demonstrates the use of template literals to create and log strings with embedded variables and multi-line strings.

const personName = "Harsh";
const personAge = 22;
const intro = `Name: ${personName}
Age: ${personAge}
Occupation: Developer`;
console.log(intro);

// Destructuring Script: Create a script that uses array and object destructuring to extract values and log them.

const coordinates = [10, 20, 30];
const [x, y, z] = coordinates;
console.log(x, y, z);

const user = { username: "harsh_burnwal", email: "codeharshburnwal@gmail.com" };
const { username, email } = user;
console.log(username, email);

// Spread and Rest Operators Script: Write a script that demonstrates the use of the spread operator to combine arrays and the rest operator to handle multiple function arguments.

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];
console.log(combinedArray);

function concatenateStrings(...strings) {
    return strings.join(" ");
}
console.log(concatenateStrings("Hello", "world", "!"));

// Default Parameters Script: Create a script that defines a function with default parameters and logs the results of calling it with different arguments.

function greet(name, greeting = "Hello") {
    return `${greeting}, ${name}!`;
}
console.log(greet("Bijay"));
console.log(greet("Anni", "Hi"));

// Enhanced Object Literals Script: Write a script that uses enhanced object literals to create and log an object with methods and computed property names.

const dynamicKey = "score";
const player = {
    name: "Phantom",
    [dynamicKey]: 100,
    displayScore() {
        console.log(`${this.name}'s score is ${this[dynamicKey]}`);
    }
};
console.log(player);
player.displayScore();
