function myMove() {
    const animate = document.getElementById("animate");
    let position = 0;
    const containerWidth = 400;
    const boxWidth = 50;
    const maxPosition = containerWidth - boxWidth; // Right edge limit

    const intervalId = setInterval(function() {
        if (position >= maxPosition) {
            clearInterval(intervalId);
        } else {
            position++;
            animate.style.left = position + "px";
        }
    }, 1);
}