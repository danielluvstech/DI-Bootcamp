function playSound(key) {
    const audio = document.querySelector(`audio[data-key="${key}"]`);
    const drum = document.querySelector(`div[data-key="${key}"]`);
    if (!audio) return;

    audio.currentTime = 0;
    audio.play();

    if (drum) {
        drum.classList.add('playing');
        setTimeout(() => drum.classList.remove('playing'), 100);
    }
}

// Handle mouse clicks
const drums = document.querySelectorAll('.drum');
drums.forEach(drum => {
    drum.addEventListener('click', function() {
        const key = this.getAttribute('data-key');
        playSound(key);
    });
});

// Handle keyboard presses
window.addEventListener('keydown', function(e) {
    const key = e.keyCode;
    playSound(key);
});