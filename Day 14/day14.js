// Day 14: Classes

// Tasks/Activities:
// Activity 1: Class Definition

// Task 1: Define a class Person with properties name and age, and a method to return a greeting message. Create an instance of the class and log the greeting message.

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

const p1 = new Person('Harsh Burnwal', 25);
console.log(p1.greet());

// Task 2: Add a method to the Person class that updates the age property and logs the updated age.

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
const p2 = new Person('Harsh Burnwal', 25);
console.log(p2.greet());
person1.updateAge(26);


// Activity 2: Class Inheritance

// Task 3: Define a class Student that extends the Person class. Add a property studentId and a method to return the student ID. Create an instance of the Student class and log the student ID.

class Student extends Person {
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
    }
    getStudentId() {
        return this.studentId;
    }
}
const s1 = new Student('Harsh Burnwal', 20, 'S12345');
console.log(s1.getStudentId());

// Task 4: Override the greeting method in the Student class to include the student ID in the message. Log the overridden greeting message.

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
const s2 = new Student('Harsh Burnwal', 20, 'S12345');
console.log(s2.greet());


// Activity 3: Static Methods and Properties

// Task 5: Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.

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

// Task 6: Add a static property to the Student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.

class Student extends Person {
    static numberOfStudents = 0;
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
        Student.numberOfStudents++;
    }
    getStudentId() {
        return this.studentId;
    }
    greet() {
        return `Hello, my name is ${this.name}, I am ${this.age} years old and my student ID is ${this.studentId}.`;
    }
}
const student1 = new Student('Harsh Burnwal', 20, 'S12345');
const student2 = new Student('Sadhu Burnwal', 22, 'S12346');
console.log(Student.numberOfStudents);


// Activity 4: Getters and Setters

// Task 7: Add a getter method to the Person class to return the full name (assume a firstName and lastName property). Create an instance and log the full name using the getter.

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
const person2 = new Person('Harsh', 'Burnwal');
console.log(person2.fullName);

// Task 8: Add a setter method to the Person class to update the name properties (firstName and lastName). Update the name using the setter and log the updated full name.

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
const person1 = new Person('Harsh', 'Burnwal');
console.log(person1.fullName);
person1.fullName = 'Harsh Burnwal';
console.log(person1.fullName);


// Activity 5: Private Fields (Optional)

// Task 9: Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.
// Task 10: Create an instance of the Account class and test the deposit and withdraw methods, logging the balance after each operation.

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