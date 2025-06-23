import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Needed to get __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function readFileContent() {
    const filePath = path.join(__dirname, 'files', 'file-data.txt');
    
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading the file:', err);
            return;
        }
        console.log('File content:\n', data);
    });
}