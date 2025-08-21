// Exercise 2: Type Guards with Union Types
export function describeValue(value: number | string): string {
  if (typeof value === "number") return "This is a number";
  if (typeof value === "string") return "This is a string";
  return "Unknown type"; // unreachable with current union, but kept for exhaustiveness
}