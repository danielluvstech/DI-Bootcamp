let score = 0;
let answer = '';
const player = prompt("Enter your name:");

// Load new emoji question
async function loadQuestion() {
    const res = await fetch('/emoji');
    const data = await res.json();
    answer = data.answer;

    const form = document.getElementById('guess-form');
    form.innerHTML = ''; // Clear previous options

    document.getElementById('emoji-display').textContent = data.emoji;

    data.options.forEach(option => {
        const btn = document.createElement('button');
        btn.type = 'submit';
        btn.textContent = option.name;
        btn.value = option.name;
        btn.onclick = handleGuess;
        form.appendChild(btn);
    });
}

// Handle guess submission
async function handleGuess(e) {
    e.preventDefault();
    const guess = e.target.value;

    const res = await fetch('/guess', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ guess, answer, score, player }),
    });

    const data = await res.json();
    score = data.newScore;

    document.getElementById('score').textContent = score;
    document.getElementById('feedback').textContent = data.correct ? '✅ Correct!' : '❌ Wrong!';

    setTimeout(() => {
        document.getElementById('feedback').textContent = '';
        loadQuestion();
        loadLeaderboard();
    }, 1000);
}

// Load top 5 scores
async function loadLeaderboard() {
    const res = await fetch('/leaderboard');
    const board = await res.json();

    const leaderboard = document.querySelectorAll('#leaderboard')[1];
    leaderboard.innerHTML = '';

    board.forEach(p => {
        const li = document.createElement('li');
        li.textContent = `${p.name}: ${p.score}`;
        leaderboard.appendChild(li);
    });
}

// Start game
loadQuestion();
loadLeaderboard();
