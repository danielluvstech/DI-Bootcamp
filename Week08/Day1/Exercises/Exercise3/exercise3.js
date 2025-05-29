let allBoldItems;

// Function to collect all bold items inside the paragraph
function getBoldItems() {
  allBoldItems = document.querySelectorAll('#myParagraph strong');
}

// Function to highlight bold text (blue)
function highlight() {
  getBoldItems(); // make sure allBoldItems is populated
  allBoldItems.forEach(item => {
    item.style.color = 'blue';
  });
}

// Function to return text color to default (black)
function returnItemsToDefault() {
  allBoldItems.forEach(item => {
    item.style.color = 'black';
  });
}

const paragraph = document.getElementById('myParagraph');
paragraph.addEventListener('mouseover', highlight);
paragraph.addEventListener('mouseout', returnItemsToDefault);
