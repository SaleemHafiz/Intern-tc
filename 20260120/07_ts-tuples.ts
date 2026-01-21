// Define a tuple
let ourTuple: [number, boolean, string];

// Initialize correctly
ourTuple = [5, false, 'Coding God was here'];

// Incorrect order throws an error
// ourTuple = [false, 'Coding God was mistaken', 5]; // Error

// Readonly tuple
const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];
// ourReadonlyTuple.push('Coding God took a day off'); // Error: cannot modify readonly tuple

// Named tuple
const graph: [x: number, y: number] = [55.2, 41.3];

// Destructuring tuple
const [x, y] = graph;
console.log(x, y); // 55.2, 41.3

// Example with React-style useState tuple
const firstNameTuple: [string, (newName: string) => void] = ['Dylan', (n) => { console.log(n); }];
const [firstName, setFirstName] = firstNameTuple;
setFirstName('Alice'); // Logs: Alice
