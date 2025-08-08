import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  selectBooks,
  selectHorrorBooks,
  selectFantasyBooks,
  selectScienceFictionBooks
} from '../features/books/selectors';

const BookList = () => {
  const [genre, setGenre] = useState('All');

  const allBooks = useSelector(selectBooks);
  const horrorBooks = useSelector(selectHorrorBooks);
  const fantasyBooks = useSelector(selectFantasyBooks);
  const sciFiBooks = useSelector(selectScienceFictionBooks);

  const getBooksByGenre = () => {
    switch (genre) {
      case 'Horror': return horrorBooks;
      case 'Fantasy': return fantasyBooks;
      case 'Science Fiction': return sciFiBooks;
      default: return allBooks;
    }
  };

  const displayedBooks = getBooksByGenre();

  return (
    <div>
      <h2>Book Inventory</h2>
      <select value={genre} onChange={(e) => setGenre(e.target.value)}>
        <option value="All">All</option>
        <option value="Horror">Horror</option>
        <option value="Fantasy">Fantasy</option>
        <option value="Science Fiction">Science Fiction</option>
      </select>

      <ul>
        {displayedBooks.map(book => (
          <li key={book.id}>
            <strong>{book.title}</strong> by {book.author} [{book.genre}]
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;