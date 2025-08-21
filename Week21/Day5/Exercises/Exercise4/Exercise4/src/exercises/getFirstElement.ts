// Exercise 4: Type Assertions with Union Types

// Requirement version: uses a type assertion to return the first element "as string"
export function getFirstElement(arr: (number | string)[]): string {
  return arr[0] as string; // compile-time only; doesn't convert numbers
}

// Safer helper (optional): actually converts numbers to string
export function getFirstElementSafe(arr: (number | string)[]): string {
  const first = arr[0];
  if (first === undefined) return ""; // or throw Error('Empty array')
  return typeof first === "string" ? first : String(first);
}