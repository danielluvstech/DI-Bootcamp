// Arrow function to check if the input is a string
const isString = value => typeof value === 'string';

// Example tests
console.log(isString('hello')); // true
console.log(isString([3, 2, 5, 0])); // false
