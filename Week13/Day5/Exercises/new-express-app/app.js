// app.js
const express = require('express');
const app = express();
const port = 3000;

// Import the router
const indexRouter = require('./routes/index');

// Use the router
app.use('/', indexRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
