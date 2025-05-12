const h1 = document.querySelector('h1');
console.log(h1);

const article = document.querySelector('article');
const paragraphs = article.querySelectorAll('p');
if (paragraphs.length > 0) {
  article.removeChild(paragraphs[paragraphs.length - 1]);
}

// Change h2 background color to red

const h2 = document.querySelector('h2');
h2.addEventListener('click', () => {
  h2.style.backgroundColor = 'red';
});

// Hide h3 when clicked
const h3 = document.querySelector('h3');
h3.addEventListener('click', () => {
  h3.style.display = 'none';
});

// Make all paragraph text bold when button is clicked
const boldButton = document.getElementById('boldButton');
boldButton.addEventListener('click', () => {
  const allParagraphs = document.querySelectorAll('article p');
  allParagraphs.forEach(p => {
    p.style.fontWeight = 'bold';
  });
});