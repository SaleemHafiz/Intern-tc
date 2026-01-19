// Import from math.js
import { add, multiply, pi, Person } from './math.js';
import message from './math.js';

// Import from person.js
import { name, age, introduce } from './person.js';
import defaultPerson from './person.js';

// Using math.js exports
console.log("Add:", add(2, 3));            // 5
console.log("Multiply:", multiply(2, 3));  // 6
console.log("Pi:", pi);                     // 3.14159

const p1 = new Person("Saleem", 40);
console.log(p1.greet());                    // Hello, my name is Saleem

console.log(message());                     // Default export message

// Using person.js exports
console.log("Name:", name);                 // Saleem
console.log("Age:", age);                   // 40
console.log(introduce());                   // Saleem is 28 years old
console.log(defaultPerson.greet());         // Hi, I'm Default
