// Exercise 7: Type Assertions and Generic Constraints

// T must have a toString(): string — works for string, number, Date, arrays, and custom objects
export function formatInput<T extends { toString(): string }>(value: T): string {
  // Type assertion: make it explicit we're treating it as a string (compile-time only)
  const s = value.toString() as string;

  // Simple "formatting" example
  return `>> ${s.trim()} <<`;
}
