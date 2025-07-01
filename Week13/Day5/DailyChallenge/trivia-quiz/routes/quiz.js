// routes/quiz.js
const express = require('express');
const router = express.Router();

const triviaQuestions = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "Which planet is known as the Red Planet?", answer: "Mars" },
  { question: "What is the largest mammal in the world?", answer: "Blue whale" }
];

// GET /quiz - Start quiz or get next question
router.get('/', (req, res) => {
  if (!req.session.quiz) {
    req.session.quiz = {
      currentQuestionIndex: 0,
      score: 0
    };
  }

  const { currentQuestionIndex } = req.session.quiz;

  if (currentQuestionIndex >= triviaQuestions.length) {
    return res.redirect('/quiz/score');
  }

  res.json({
    questionNumber: currentQuestionIndex + 1,
    question: triviaQuestions[currentQuestionIndex].question
  });
});

// POST /quiz - Submit answer
router.post('/', (req, res) => {
  const userAnswer = req.body.answer;
  const quiz = req.session.quiz;

  if (!quiz || quiz.currentQuestionIndex >= triviaQuestions.length) {
    return res.status(400).json({ message: "Quiz not started or already finished" });
  }

  const currentQuestion = triviaQuestions[quiz.currentQuestionIndex];
  const isCorrect = userAnswer?.trim().toLowerCase() === currentQuestion.answer.toLowerCase();

  if (isCorrect) {
    quiz.score++;
  }

  const feedback = isCorrect ? "Correct!" : `Incorrect. The correct answer is: ${currentQuestion.answer}`;

  quiz.currentQuestionIndex++;

  if (quiz.currentQuestionIndex >= triviaQuestions.length) {
    return res.json({
      message: feedback,
      done: true,
      next: "/quiz/score"
    });
  }

  res.json({
    message: feedback,
    nextQuestion: triviaQuestions[quiz.currentQuestionIndex].question
  });
});

// GET /quiz/score - Show final score
router.get('/score', (req, res) => {
  const quiz = req.session.quiz;
  if (!quiz) {
    return res.status(400).json({ message: "No quiz in progress" });
  }

  const total = triviaQuestions.length;
  const score = quiz.score;

  // Clear quiz session
  req.session.quiz = null;

  res.json({
    message: `Your final score is ${score} out of ${total}`
  });
});

module.exports = router;
