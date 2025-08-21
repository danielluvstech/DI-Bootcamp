// src/types.ts

// Base types
export type User = { type: 'user'; name: string; age: number };
export type Product = { type: 'product'; id: number; price: number };
export type Order = { type: 'order'; orderId: string; amount: number };

// Guards
export const isUser = (x: unknown): x is User =>
  typeof x === 'object' && x !== null &&
  (x as any).type === 'user' &&
  typeof (x as any).name === 'string' &&
  typeof (x as any).age === 'number';

export const isProduct = (x: unknown): x is Product =>
  typeof x === 'object' && x !== null &&
  (x as any).type === 'product' &&
  typeof (x as any).id === 'number' &&
  typeof (x as any).price === 'number';

export const isOrder = (x: unknown): x is Order =>
  typeof x === 'object' && x !== null &&
  (x as any).type === 'order' &&
  typeof (x as any).orderId === 'string' &&
  typeof (x as any).amount === 'number';