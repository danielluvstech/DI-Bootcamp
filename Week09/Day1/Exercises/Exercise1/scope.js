// // #1
// function funcOne() {
//     let a = 5; // 'a' is declared and scoped within funcOne
//     if(a > 1) {
//         a = 3; // a is reassigned to 3
//     }
//     alert(`inside the funcOne function ${a}`); // Will alert "inside the funcOne function 3"
// }

// // #1.1 - run in the console:
// funcOne();

// // #1.2 What will happen if the variable is declared 
// // with const instead of let ?
// // If 'a' is declared with const, it cannot be reassigned inside the if block.
// // This will throw a TypeError: Assignment to the const variable.


// // #2
// let a = 0; // 'a' is in global scope
// function funcTwo() {
//     a = 5; // modifies the global 'a'
// }

// function funcThree() {
//     alert(`inside the funcThree function ${a}`);
// }

// // #2.1 - run in the console:
// funcThree(); // Alerts: "inside the funcThree function 0"
// funcTwo();   // Sets global 'a' to 5
// funcThree(); // Alerts: "inside the funcThree function 5"

// // #2.2 What will happen if the variable is declared 
// // with const instead of let ?
// // If 'a' is declared as const globally, then funcTwo() will throw a TypeError 
// // when trying to reassign 'a'.


// // #3
// function funcFour() {
//     window.a = "hello"; // Adds 'a' as a global variable to the window object
// }

// function funcFive() {
//     alert(`inside the funcFive function ${a}`); // Uses the global 'a'
// }

// // #3.1 - run in the console:
// funcFour(); // Sets window.a to "hello"
// funcFive(); // Alerts: "inside the funcFive function hello"


// // #4
// let a = 1; // Global 'a'
// function funcSix() {
//     let a = "test"; // Local variable, shadows global 'a'
//     alert(`inside the funcSix function ${a}`); // Alerts: "inside the funcSix function test"
// }

// // #4.1 - run in the console:
// funcSix();

// // #4.2 What will happen if the variable is declared 
// // with const instead of let ?
// // Declaring 'a' with const instead of let inside funcSix will still work, 
// // because it’s a new block-scoped variable and not reassigned. No error.


// // #5
// let a = 2; // Global scope
// if (true) {
//     let a = 5; // Block-scoped 'a', only exists in this if block
//     alert(`in the if block ${a}`); // Alerts: "in the if block 5"
// }
// alert(`outside of the if block ${a}`); // Alerts: "outside of the if block 2"

// // #5.1 - run the code in the console

// // #5.2 What will happen if the variable is declared 
// // with const instead of let ?
// // The behavior will be the same. const is block-scoped, just like let.
// // As long as there’s no reassignment, there won’t be an error.
