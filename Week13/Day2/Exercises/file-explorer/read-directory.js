const fs = require('fs');

const directoryPath = __dirname; // current directory

try {
  const files = fs.readdirSync(directoryPath);
  console.log('Files in directory:');
  files.forEach(file => console.log(`- ${file}`));
} catch (err) {
  console.error('Error reading directory:', err.message);
}