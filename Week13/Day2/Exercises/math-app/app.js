const _ = require('lodash');
const math = require('./math');

const a = 10;
const b = 5;

// Use custom module
console.log("Addition:", math.add(a, b));
console.log("Multiplication:", math.multiply(a, b)); 

// Use lodash for additional operations
const numbers = [1, 2, 3, 4, 5];
console.log("Sum using lodash:", _.sum(numbers)); 
console.log("Max using lodash:", _.max(numbers)); 