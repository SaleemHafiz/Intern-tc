// Export functions
export function add(a, b) {
  return a + b;
}

export function multiply(a, b) {
  return a * b;
}

// Export variable
export const pi = 3.14159;

// Export class
export class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return "Hello, my name is " + this.name;
  }
}

// Default export
export default function message() {
  return "This is a default export message from math.js";
}
