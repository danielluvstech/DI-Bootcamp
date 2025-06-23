import { greet } from './greeting.js';
import { showColorfulMessage } from './colorful-message.js';
import { readFileContent } from './read-file.js';

const username = 'Daniel';

console.log(greet(username));         // Show greeting
showColorfulMessage();               // Show colorful message
readFileContent();                   // Show file content