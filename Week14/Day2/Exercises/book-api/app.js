const express = require('express');
const app = express();
const booksRoutes = require('./server/config/routes/booksRoutes');

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use('/api/books', booksRoutes);

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
