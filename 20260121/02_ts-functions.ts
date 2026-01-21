// Function with explicit return type
function getTime(): number {
  return new Date().getTime();
}

// Void return type
function printHello(): void {
  console.log("Hello!");
}

// Typed parameters
function multiply(a: number, b: number) {
  return a * b;
}

// Optional parameters
function add(a: number, b: number, c?: number) {
  return a + b + (c || 0);
}

// Default parameters
function pow(value: number, exponent: number = 10) {
  return value ** exponent;
}

// Named parameters
function divide({ dividend, divisor }: { dividend: number, divisor: number }) {
  return dividend / divisor;
}

// Rest parameters
function sumAll(a: number, b: number, ...rest: number[]) {
  return a + b + rest.reduce((p, c) => p + c, 0);
}

// Function type alias
type Negate = (value: number) => number;
const negateFunction: Negate = (value) => value * -1;

// Return type inference example
function greet(name: string): string {
  return `Hello, ${name}`;
}
