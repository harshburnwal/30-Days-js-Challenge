// Feature Request:

// Basic Class Script: Write a script that defines a Person class with properties and methods, creates instances, and logs messages.

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
    updateAge(newAge) {
        this.age = newAge;
        console.log(`Updated age: ${this.age}`);
    }
}
const person1 = new Person('Harsh', 25);
console.log(person1.greet());
person1.updateAge(26);

// Class Inheritance Script: Create a script that defines a Student class extending Person, overrides methods, and logs the results.

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}
class Student extends Person {
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
    }
    getStudentId() {
        return this.studentId;
    }
    greet() {
        return `Hello, my name is ${this.name}, I am ${this.age} years old and my student ID is ${this.studentId}.`;
    }
}
const student1 = new Student('Harsh', 22, 'S12345');
console.log(student1.greet());
console.log(student1.getStudentId());

// Static Methods and Properties Script: Write a script that demonstrates static methods and properties in classes.

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
    static genericGreet() {
        return 'Hello, this is a generic greeting message.';
    }
}
console.log(Person.genericGreet());

// Getters and Setters Script: Create a script that uses getters and setters in a class.

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    set fullName(newName) {
        const [firstName, lastName] = newName.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
const p1 = new Person('Sadhu', 'Burnwal');
console.log(p1.fullName);
person1.fullName = 'Sadhu Burnwal';
console.log(p1.fullName);

// Private Fields Script: Write a script that defines a class with private fields and methods to manipulate these fields (optional).

class Account {
    #balance;
    constructor(initialBalance) {
        this.#balance = initialBalance;
    }
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited: ${amount}. Current Balance: ${this.#balance}`);
        }
    }
    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Withdrew: ${amount}. Current Balance: ${this.#balance}`);
        } else {
            console.log('Insufficient balance or invalid amount');
        }
    }
}
const account1 = new Account(100);
account1.deposit(50);
account1.withdraw(30);
account1.withdraw(150);

// Day 14 Completed...