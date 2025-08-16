"use strict";
class Calculator {
    // static method for addition
    static add(a, b) {
        return a + b;
    }
    // static method for subtraction
    static subtract(a, b) {
        return a - b;
    }
}
// ✅ Call static methods directly without creating an instance
console.log("Add:", Calculator.add(10, 5)); // 15
console.log("Subtract:", Calculator.subtract(10, 5)); // 5
