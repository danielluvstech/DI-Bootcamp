// app.js
const express = require('express');
const session = require('express-session');
const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(session({
  secret: 'quiz-secret',
  resave: false,
  saveUninitialized: true
}));

// Mount router
const quizRouter = require('./routes/quiz');
app.use('/quiz', quizRouter);

// Start server
app.listen(port, () => {
  console.log(`Quiz app running at http://localhost:${port}`);
});
