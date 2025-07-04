let books = require('../models/booksModel');

// GET all books
exports.getAllBooks = (req, res) => {
  res.json(books);
};

// GET one book
exports.getBookById = (req, res) => {
  const bookId = parseInt(req.params.bookId);
  const book = books.find(b => b.id === bookId);

  if (book) {
    res.status(200).json(book);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
};

// POST a new book
exports.createBook = (req, res) => {
  const { title, author, publishedYear } = req.body;
  const newBook = {
    id: books.length + 1,
    title,
    author,
    publishedYear: parseInt(publishedYear)
  };
  books.push(newBook);
  res.status(201).json(newBook);
};
