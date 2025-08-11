// Function overload signatures
function greet(): string;
function greet(name: string): string;

// Function implementation
function greet(name?: string): string {
    if (name) {
        return `Hello, ${name}!`;
    } else {
        return "Hello, Guest!";
    }
}

// Test the function with and without arguments
console.log(greet("Alice"));  // Output: Hello, Alice!
console.log(greet());         // Output: Hello, Guest!
