// Creating arrays
const numbers = [1, 2, 3, 4, 5];
const fruits = ["Apple", "Banana", "Mango"];

// Accessing elements
console.log(numbers[0]);
console.log(fruits[2]);

// Adding elements
numbers.push(6);
fruits.unshift("Orange");

// Removing elements
numbers.pop();
fruits.shift();

// Array properties and methods
console.log("Length of numbers:", numbers.length);
console.log("Index of Mango:", fruits.indexOf("Mango"));

// Looping through an array
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
