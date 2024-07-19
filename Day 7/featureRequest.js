// Feature Request:

// Book Object Script: Write a script that creates a book object, adds methods to it, and logs its properties and method results.

let book = {
    title: "The Last Man Standing",
    author: "Harsh",
    year: 2024,
    getTitleAndAuthor: function () {
        return `${this.title} by ${this.author}`;
    },
    updateYear: function (newYear) {
        this.year = newYear;
    },
    getTitleAndYear: function () {
        return `${this.title} ( ${this.year} )`;
    }
};
console.log(book);
console.log(book.getTitleAndAuthor());
book.updateYear(2020);
console.log(book);
console.log(book.getTitleAndYear());

// Library Object Script: Create a script that defines a library object containing an array of book objects and logs the library’s details.

let library = {
    name: "The National Library",
    books: [
        { title: "The Last Man Standing", author: "Harsh", year: 2024 },
        { title: "Think like a Monk", author: "Jay Shetty", year: 2020 }
    ]
};
console.log(library);
console.log("Library Name: " + library.name);
library.books.forEach(function (book) {
    console.log("Book Title: " + book.title);
});

// Object Iteration Script: Write a script that demonstrates iterating over an object’s properties using for...in loop and Object.keys/Object.values.

let digitalLibrary = {
    name: "The National Library",
    books: [
        { title: "The Last Man Standing", author: "Harsh", year: 2024 },
        { title: "Think like a Monk", author: "Jay Shetty", year: 2020 }
    ]
};
console.log(library);
console.log("Library Name: " + library.name);
library.books.forEach(function (book) {
    console.log("Book Title: " + book.title);
});
