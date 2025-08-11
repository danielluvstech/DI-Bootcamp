function checkNumber(num) {
    if (num > 0) {
        return "Positive";
    }
    else if (num < 0) {
        return "Negative";
    }
    else {
        return "Zero";
    }
}
// Test the function with different values
console.log(checkNumber(10)); // Output: Positive
console.log(checkNumber(-5)); // Output: Negative
console.log(checkNumber(0)); // Output: Zero
