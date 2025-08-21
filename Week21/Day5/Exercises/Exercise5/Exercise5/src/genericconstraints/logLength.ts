// Exercise 5: Generic Constraints

// T must have a numeric `length` property (e.g., string, Array, or array-like)
export function logLength<T extends { length: number }>(value: T): number {
  const len = value.length;
  console.log("Length:", len);
  return len; // returned so callers can also use it
}