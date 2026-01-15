// Creating a set
const numbers = new Set([1, 2, 3, 4, 4, 5]);
console.log(numbers); // duplicates removed

// Adding values
numbers.add(6);
numbers.add(2); // ignored because 2 already exists
console.log(numbers);

// Removing values
numbers.delete(3);
console.log(numbers);

// Checking for a value
console.log(numbers.has(4)); // true
console.log(numbers.has(10)); // false

// Looping through a set
for (const num of numbers) {
  console.log(num);
}

// Size of the set
console.log("Set size:", numbers.size);

// Clearing all values
numbers.clear();
console.log(numbers); // empty set
