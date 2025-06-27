let score = 0;
let answer = '';
const player = prompt("Enter your name:");

async function loadQuestion() {
    const res = await fetch('/emoji');
    const data = await res.json();
    answer = data.answer;
    const form = document.getElementById('guess-form');
    form.innerHTML = '';
    document.getElementById('emoji-display').textContent = data.emoji;
    data.options.forEach(option => {
        const btn = document.createElement('button');
        btn.textContent = option.name;
        btn.type = 'submit';
        btn.value = option.name;
        btn.onclick = handleGuess;
        form.appendChild(btn);
    });
}

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

async function loadLeaderboard() {
    const res = await fetch('/leaderboard');
    const leaders = await res.json();
    const list = document.getElementById('leaderboard');
    list.innerHTML = '';
    leaders.forEach(p => {
        const li = document.createElement('li');
        li.textContent = `${p.name}: ${p.score}`;
        list.appendChild(li);
    });
}

loadQuestion();
loadLeaderboard();