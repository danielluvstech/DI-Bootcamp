// Exercise 3: Type Casting / Type Assertions

// Step 1: variable of type `any`
export let someValue: any = "hello world";

// Step 2: "cast" (assert) to string (compile-time only)
export const asString = someValue as string;

// Step 3: use it as a string
export const shouted = asString.toUpperCase();

// Optional: show a real runtime conversion (actually converts the value)
export const converted = String(someValue);