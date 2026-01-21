// Explicit types
let greeting: string = "Hello, TypeScript!";
let userCount: number = 42;
let isLoading: boolean = true;
let scores: number[] = [100, 95, 98];

// Function with explicit types
function greet(name: string): string {
    return `Hello, ${name}!`;
}

greet("Alice"); // OK
// greet(42);   // Error: Argument of type '42' is not assignable to parameter of type 'string'

// Type inference
let username = "alice"; // inferred as string
let score = 100;        // inferred as number
let flags = [true, false, true]; // inferred as boolean[]

// Function with inferred return type
function add(a: number, b: number) {
    return a + b; // inferred as number
}

// Object literal inference
const user = {
    name: "Alice",
    age: 30,
    isAdmin: true
};

console.log(user.name);  // OK
// console.log(user.email); // Error: Property 'email' does not exist

// Type safety examples
let nameExplicit: string = "alice";
// nameExplicit = 42; // Error: Type 'number' is not assignable to type 'string'

let scoreInferred = 100;
// scoreInferred = "high"; // Error: Type 'string' is not assignable to type 'number'

// Example of 'any'
const data = JSON.parse('{ "name": "Alice", "age": 30 }'); // data: any
let something; // something: any
something = "hello";
something = 42;
