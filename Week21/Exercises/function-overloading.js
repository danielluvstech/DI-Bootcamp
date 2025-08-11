// Function implementation
function greet(name) {
    if (name) {
        return "Hello, ".concat(name, "!");
    }
    else {
        return "Hello, Guest!";
    }
}
// Test the function with and without arguments
console.log(greet("Alice")); // Output: Hello, Alice!
console.log(greet()); // Output: Hello, Guest!
