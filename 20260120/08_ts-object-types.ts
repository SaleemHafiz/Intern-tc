// Basic object type
const car: { type: string, model: string, year: number } = {
  type: "Toyota",
  model: "Corolla",
  year: 2009
};

// Type inference
const inferredCar = { type: "Toyota" };
inferredCar.type = "Ford"; // OK
// inferredCar.type = 2; // Error: Type 'number' is not assignable to type 'string'.

// Optional properties
const carWithOptional: { type: string, mileage?: number } = { 
  type: "Toyota" 
};
carWithOptional.mileage = 2000; // OK

// Index signatures
const nameAgeMap: { [index: string]: number } = {};
nameAgeMap.Jack = 25;   // OK
// nameAgeMap.Mark = "Fifty"; // Error: Type 'string' is not assignable to type 'number'

// Using utility types (Record)
const scores: Record<string, number> = {};
scores.Alice = 95;  // OK

// Example object for exercise
let user: { name: string, age: number } = {
  name: "John",
  age: 30
};
