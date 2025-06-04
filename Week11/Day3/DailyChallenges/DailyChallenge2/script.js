document.addEventListener("DOMContentLoaded", () => {
  const morse = `{
    "0": "-----", "1": ".----", "2": "..---", "3": "...--", "4": "....-", "5": ".....",
    "6": "-....", "7": "--...", "8": "---..", "9": "----.",
    "a": ".-", "b": "-...", "c": "-.-.", "d": "-..", "e": ".", "f": "..-.",
    "g": "--.", "h": "....", "i": "..", "j": ".---", "k": "-.-", "l": ".-..",
    "m": "--", "n": "-.", "o": "---", "p": ".--.", "q": "--.-", "r": ".-.",
    "s": "...", "t": "-", "u": "..-", "v": "...-", "w": ".--", "x": "-..-",
    "y": "-.--", "z": "--..",
    ".": ".-.-.-", ",": "--..--", "?": "..--..", "!": "-.-.--",
    "-": "-....-", "/": "-..-.", "@": ".--.-.", "(": "-.--.", ")": "-.--.-"
  }`;

  function toJs() {
    return new Promise((resolve, reject) => {
      const morseJS = JSON.parse(morse);
      if (Object.keys(morseJS).length === 0) {
        reject("This morse object is empty.");
      } else {
        resolve(morseJS);  
      }
    });
  }

  function toMorse(morseJS) {
    return new Promise((resolve, reject) => {
      const userInput = prompt("Type in a word or phrase and watch it convert to Morse code:");
      if (!userInput) {
        reject("Input is empty.");
        return;
      }
      const translation = [];

      for (let char of userInput.toLowerCase()) {
        if (morseJS[char]) {
          translation.push(morseJS[char]);
        } else {
          reject(`${char} is not supported for the Morse code language.`);
          return;
        }
      }

      resolve(translation);
    });
  }

  function joinWords(morseTranslation) {
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = morseTranslation.join("<br>");
  }

  toJs()
    .then(toMorse)
    .then(joinWords)
    .catch(error => {
      const outputDiv = document.getElementById("output");
      if (outputDiv) {
        outputDiv.innerText = `Error: ${error}`;
      } else {
        alert(`Error: ${error}`);
      }
    });
});
