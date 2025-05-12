// Part I: setTimeout with alert
setTimeout(function() {
    alert("Hello World");
}, 2000);

// Part II: setTimeout to add paragraph
setTimeout(function() {
    const container = document.getElementById("container");
    const paragraph = document.createElement("p");
    paragraph.textContent = "Hello World";
    container.appendChild(paragraph);
}, 2000);

// Part III: setInterval with clear conditions
let intervalId;
let paragraphCount = 0;

function addParagraph() {
    const container = document.getElementById("container");
    const paragraph = document.createElement("p");
    paragraph.textContent = "Hello World";
    container.appendChild(paragraph);
    paragraphCount++;
    
    // Clear interval when 5 paragraphs are reached
    if (paragraphCount >= 5) {
        clearInterval(intervalId);
    }
}

intervalId = setInterval(addParagraph, 2000);

// Clear interval on button click
document.getElementById("clear").addEventListener("click", function() {
    clearInterval(intervalId);
});