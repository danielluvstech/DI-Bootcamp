const emojis = [
    { emoji: '😀', name: 'Smile' },
    { emoji: '🐶', name: 'Dog' },
    { emoji: '🌮', name: 'Taco' },
    { emoji: '🚗', name: 'Car' },
    { emoji: '📚', name: 'Books' },
    { emoji: '🍕', name: 'Pizza' },
];

function fisherYatesShuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function getRandomEmojiSet() {
    if (emojis.length === 0) throw new Error('Emoji array is empty');

    const correct = emojis[Math.floor(Math.random() * emojis.length)];

    let distractors = emojis.filter(e => e.name !== correct.name);
    if (distractors.length < 2) {
        // Edge case handling: duplicate some distractors
        while (distractors.length < 2) {
            distractors.push(correct); // worst case fallback
        }
    }

    distractors = fisherYatesShuffle(distractors).slice(0, 2);
    const options = fisherYatesShuffle([correct, ...distractors]);

    return { emoji: correct.emoji, answer: correct.name, options };
}

module.exports = { getRandomEmojiSet };
