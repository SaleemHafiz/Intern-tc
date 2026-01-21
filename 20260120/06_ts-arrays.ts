// Typed array
const names: string[] = [];
names.push("Dylan"); // OK
// names.push(3); // Error: number not allowed

// Readonly array
const readonlyNames: readonly string[] = ["Dylan"];
// readonlyNames.push("Jack"); // Error: cannot modify readonly array

// Type inference for arrays
const numbers = [1, 2, 3]; // inferred as number[]
numbers.push(4); // OK
// numbers.push("2"); // Error: string not assignable
let head: number = numbers[0]; // OK

// Exercise: correct type annotation for array of numbers
let moreNumbers: number[] = [1, 2, 3, 4, 5];
