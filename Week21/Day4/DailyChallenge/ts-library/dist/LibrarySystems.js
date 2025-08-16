"use strict";
// Base class Library
class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        // Prevent duplicate ISBNs (simple guard)
        if (this.books.some(b => b.isbn === book.isbn)) {
            throw new Error(`Book with ISBN ${book.isbn} already exists.`);
        }
        this.books.push(book);
    }
    getBookDetails(isbn) {
        const book = this.books.find(b => b.isbn === isbn);
        if (!book)
            return `Book with ISBN ${isbn} not found.`;
        const { title, author, publishedYear, genre } = book;
        const g = genre ? ` | Genre: ${genre}` : "";
        return `${title} by ${author} (${publishedYear})${g} | ISBN: ${isbn}`;
    }
    // Expose books to subclasses without allowing mutation
    getAllBooks() {
        return this.books;
    }
}
// Subclass DigitalLibrary
class DigitalLibrary extends Library {
    constructor(website) {
        super();
        this.website = website;
    }
    listBooks() {
        return this.getAllBooks().map(b => b.title);
    }
}
// ---- Demo ----
const dl = new DigitalLibrary("https://examplelibrary.com");
dl.addBook({
    title: "Clean Code",
    author: "Robert C. Martin",
    isbn: "9780132350884",
    publishedYear: 2008,
    genre: "Software Engineering"
});
dl.addBook({
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt & David Thomas",
    isbn: "9780201616224",
    publishedYear: 1999
});
dl.addBook({
    title: "You Don't Know JS Yet",
    author: "Kyle Simpson",
    isbn: "9781091210091",
    publishedYear: 2020,
    genre: "JavaScript"
});
console.log("Website:", dl.website);
console.log(dl.getBookDetails("9780132350884"));
console.log(dl.getBookDetails("9780201616224"));
console.log(dl.getBookDetails("0000000000")); // not found example
console.log("All titles:", dl.listBooks());
