function getDetails(name, age) {
    var greeting = "Hello, ".concat(name, "! You are ").concat(age, " years old.");
    return [name, age, greeting]; // Returning a tuple
}
// Call the function and log the tuple
var details = getDetails("Alice", 25);
console.log(details); // Output: ['Alice', 25, 'Hello, Alice! You are 25 years old.']
