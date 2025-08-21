type Book = { id: string; title: string; author: string }; // tested to see if it would render
import React, { useState } from "react";
// import { Book } from "./types"; // not sure why the red line stayed
import { List } from "./components/List";
import BookForm from "./components/BookForm";

function makeId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return Math.random().toString(36).slice(2);
}

export default function BookApp() {
  const [books, setBooks] = useState<Book[]>([
    { id: makeId(), title: "Clean Code", author: "Robert C. Martin" },
    { id: makeId(), title: "Refactoring", author: "Martin Fowler" },
    { id: makeId(), title: "Effective TypeScript", author: "Dan Vanderkam" },
  ]);

  function addBook(title: string, author: string) {
    const newBook: Book = { id: makeId(), title, author };
    setBooks((prev) => [...prev, newBook]);
  }

  return (
    <div className="container">
      <h1>📚 Book List (Generic List Demo)</h1>

      <BookForm onAdd={addBook} />

      <List
        items={books}
        getKey={(b) => b.id}
        renderItem={(b) => (
          <div className="book-item">
            <strong>{b.title}</strong>
            <span className="by"> by </span>
            <em>{b.author}</em>
          </div>
        )}
        emptyState={<p>No books yet — add your first above!</p>}
        className="book-list"
      />
    </div>
  );
}