const fs = require('fs');

// reading file function

function readFile(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    console.log(`Content of "${filePath}":\n${data}`);
  } catch (err) {
    console.error(`Error reading file "${filePath}":`, err.message);
  }
}

// Write file function
function writeFile(filePath, content) {
  try {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Successfully wrote to "${filePath}"`);
  } catch (err) {
    console.error(`Error writing to file "${filePath}":`, err.message);
  }
}

module.exports = { readFile, writeFile };