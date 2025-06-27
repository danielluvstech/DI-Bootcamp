const emojis = [
    { emoji: '😀', name: 'Smile' },
    { emoji: '🐶', name: 'Dog' },
    { emoji: '🌮', name: 'Taco' },
    { emoji: '🚗', name: 'Car' },
    { emoji: '📚', name: 'Books' },
    { emoji: '🍕', name: 'Pizza' },
];

function getRandomEmojiSet() {
    const correct = emojis[Math.floor(Math.random() * emojis.length)];
    const shuffled = emojis.filter(e => e.name !== correct.name).sort(() => 0.5 - Math.random());
    const options = [...shuffled.slice(0, 2), correct].sort(() => 0.5 - Math.random());
    return { emoji: correct.emoji, answer: correct.name, options };
}

module.exports = { getRandomEmojiSet };