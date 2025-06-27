const express = require('express');
const path = require('path');
const { getRandomEmojiSet } = require('./data');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

let leaderboard = [];

app.get('/emoji', (req, res) => {
    const question = getRandomEmojiSet();
    res.json(question);
});

app.post('/guess', (req, res) => {
    const { guess, answer, score, player } = req.body;
    const correct = guess === answer;
    const newScore = correct ? score + 1 : score;

    if (player) {
        const existing = leaderboard.find(p => p.name === player);
        if (existing) existing.score = Math.max(existing.score, newScore);
        else leaderboard.push({ name: player, score: newScore });
    }

    res.json({ correct, newScore });
});

app.get('/leaderboard', (req, res) => {
    const top = leaderboard.sort((a, b) => b.score - a.score).slice(0, 5);
    res.json(top);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));