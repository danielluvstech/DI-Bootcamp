const { readFile, writeFile } = require('./fileManager');

// Read from "Hello World.txt"
readFile('Hello World.txt');

// Write to "Bye World.txt"
writeFile('Bye World.txt', 'Writing to the file');