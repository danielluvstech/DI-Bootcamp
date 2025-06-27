const express = require('express');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Emoji database
const emojis = [
    { emoji: '🐶', name: 'dog' },
    { emoji: '🐱', name: 'cat' },
    { emoji: '🐭', name: 'mouse' },
    { emoji: '🐹', name: 'hamster' },
    { emoji: '🐰', name: 'rabbit' },
    { emoji: '🦊', name: 'fox' },
    { emoji: '🐻', name: 'bear' },
    { emoji: '🐼', name: 'panda' },
    { emoji: '🐨', name: 'koala' },
    { emoji: '🐯', name: 'tiger' },
    { emoji: '🦁', name: 'lion' },
    { emoji: '🐮', name: 'cow' },
    { emoji: '🐷', name: 'pig' },
    { emoji: '🐸', name: 'frog' },
    { emoji: '🐵', name: 'monkey' },
    { emoji: '🐔', name: 'chicken' },
    { emoji: '🐧', name: 'penguin' },
    { emoji: '🐦', name: 'bird' },
    { emoji: '🐤', name: 'chick' },
    { emoji: '🦆', name: 'duck' }
];

// In-memory storage
let players = {};
let leaderboard = [];

// Helper functions
function getRandomEmoji() {
    return emojis[Math.floor(Math.random() * emojis.length)];
}

function generateOptions(correctAnswer) {
    const options = [correctAnswer];
    const usedNames = new Set([correctAnswer]);
    
    while (options.length < 4) {
        const randomEmoji = getRandomEmoji();
        if (!usedNames.has(randomEmoji.name)) {
            options.push(randomEmoji.name);
            usedNames.add(randomEmoji.name);
        }
    }
    
    // Shuffle options
    return options.sort(() => Math.random() - 0.5);
}

function updateLeaderboard(playerId, score) {
    const existingPlayerIndex = leaderboard.findIndex(p => p.playerId === playerId);
    
    if (existingPlayerIndex !== -1) {
        // Update existing player's best score
        if (score > leaderboard[existingPlayerIndex].score) {
            leaderboard[existingPlayerIndex].score = score;
        }
    } else {
        // Add new player
        leaderboard.push({ playerId, score });
    }
    
    // Sort by score (descending) and keep top 10
    leaderboard.sort((a, b) => b.score - a.score);
    leaderboard = leaderboard.slice(0, 10);
}

// API Routes

// 1. Start a new game
app.post('/api/game/start', (req, res) => {
    const { playerId } = req.body;
    
    if (!playerId) {
        return res.status(400).json({ 
            error: 'playerId is required',
            example: { playerId: 'player123' }
        });
    }
    
    const currentEmoji = getRandomEmoji();
    const options = generateOptions(currentEmoji.name);
    
    // Initialize or reset player
    players[playerId] = {
        score: 0,
        currentEmoji: currentEmoji,
        questionsAnswered: 0,
        gameActive: true
    };
    
    res.json({
        message: 'Game started successfully!',
        playerId: playerId,
        question: {
            emoji: currentEmoji.emoji,
            options: options,
            questionNumber: 1
        },
        gameState: {
            score: 0,
            questionsAnswered: 0
        }
    });
});

// 2. Submit a guess
app.post('/api/game/guess', (req, res) => {
    const { playerId, guess } = req.body;
    
    if (!playerId || !guess) {
        return res.status(400).json({ 
            error: 'playerId and guess are required',
            example: { playerId: 'player123', guess: 'dog' }
        });
    }
    
    if (!players[playerId] || !players[playerId].gameActive) {
        return res.status(404).json({ 
            error: 'Player not found or game not active. Start a new game first.' 
        });
    }
    
    const player = players[playerId];
    const isCorrect = guess.toLowerCase() === player.currentEmoji.name.toLowerCase();
    const correctAnswer = player.currentEmoji.name;
    
    // Update score and stats
    if (isCorrect) {
        player.score += 10;
    }
    player.questionsAnswered++;
    
    // Generate next question
    const nextEmoji = getRandomEmoji();
    const nextOptions = generateOptions(nextEmoji.name);
    player.currentEmoji = nextEmoji;
    
    // Update leaderboard
    updateLeaderboard(playerId, player.score);
    
    res.json({
        result: {
            correct: isCorrect,
            yourGuess: guess,
            correctAnswer: correctAnswer,
            pointsEarned: isCorrect ? 10 : 0
        },
        nextQuestion: {
            emoji: nextEmoji.emoji,
            options: nextOptions,
            questionNumber: player.questionsAnswered + 1
        },
        gameState: {
            score: player.score,
            questionsAnswered: player.questionsAnswered
        }
    });
});

// 3. Get current game state
app.get('/api/game/state/:playerId', (req, res) => {
    const playerId = req.params.playerId;
    
    if (!players[playerId]) {
        return res.status(404).json({ 
            error: 'Player not found. Start a new game first.' 
        });
    }
    
    const player = players[playerId];
    const options = generateOptions(player.currentEmoji.name);
    
    res.json({
        playerId: playerId,
        currentQuestion: {
            emoji: player.currentEmoji.emoji,
            options: options,
            questionNumber: player.questionsAnswered + 1
        },
        gameState: {
            score: player.score,
            questionsAnswered: player.questionsAnswered,
            gameActive: player.gameActive
        }
    });
});

// 4. Get leaderboard
app.get('/api/leaderboard', (req, res) => {
    res.json({
        message: 'Top 10 players',
        leaderboard: leaderboard.length > 0 ? leaderboard : [],
        totalPlayers: Object.keys(players).length
    });
});

// 5. End game (optional - saves final score)
app.post('/api/game/end', (req, res) => {
    const { playerId } = req.body;
    
    if (!playerId) {
        return res.status(400).json({ 
            error: 'playerId is required' 
        });
    }
    
    if (!players[playerId]) {
        return res.status(404).json({ 
            error: 'Player not found' 
        });
    }
    
    const player = players[playerId];
    player.gameActive = false;
    
    // Final leaderboard update
    updateLeaderboard(playerId, player.score);
    
    res.json({
        message: 'Game ended successfully!',
        finalStats: {
            playerId: playerId,
            finalScore: player.score,
            questionsAnswered: player.questionsAnswered,
            accuracy: player.questionsAnswered > 0 ? 
                Math.round((player.score / 10) / player.questionsAnswered * 100) + '%' : '0%'
        },
        leaderboardPosition: leaderboard.findIndex(p => p.playerId === playerId) + 1
    });
});

// 6. Get all emojis (for reference)
app.get('/api/emojis', (req, res) => {
    res.json({
        message: 'All available emojis in the game',
        count: emojis.length,
        emojis: emojis
    });
});

// 7. Reset game data (for testing)
app.delete('/api/game/reset', (req, res) => {
    players = {};
    leaderboard = [];
    
    res.json({
        message: 'All game data has been reset',
        players: 0,
        leaderboard: []
    });
});

// Root endpoint with API documentation
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to the Emoji Guessing Game API! 🎮',
        version: '1.0.0',
        endpoints: {
            'POST /api/game/start': 'Start a new game (requires: playerId)',
            'POST /api/game/guess': 'Submit a guess (requires: playerId, guess)',
            'GET /api/game/state/:playerId': 'Get current game state',
            'GET /api/leaderboard': 'Get top 10 scores',
            'POST /api/game/end': 'End current game (requires: playerId)',
            'GET /api/emojis': 'Get all available emojis',
            'DELETE /api/game/reset': 'Reset all game data'
        },
        usage: {
            step1: 'POST /api/game/start with {"playerId": "yourname"}',
            step2: 'POST /api/game/guess with {"playerId": "yourname", "guess": "dog"}',
            step3: 'Repeat step 2 to keep playing!',
            step4: 'GET /api/leaderboard to see top scores'
        }
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`🎮 Emoji Guessing Game API running on http://localhost:${PORT}`);
    console.log(`📬 Test with Postman using the endpoints above`);
    console.log(`📖 Visit http://localhost:${PORT} for API documentation`);
});