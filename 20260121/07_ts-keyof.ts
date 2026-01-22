// keyof creates a union of property names
interface Person { name: string; age: number; }
function printPersonProperty(person: Person, property: keyof Person) {
  console.log(`Printing person property ${property}: "${person[property]}"`);
}
let person: Person = { name: "Max", age: 27 };
printPersonProperty(person, "name");

// keyof with index signatures
type StringMap = { [key: string]: unknown };
function createStringPair(property: keyof StringMap, value: string): StringMap {
  return { [property]: value };
}

// Using keyof to extract property names from User
interface User { name: string; age: number; email: string; }
type UserKeys = keyof User; // "name" | "age" | "email"
