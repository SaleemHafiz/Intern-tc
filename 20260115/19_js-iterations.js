// for loop - known number of iterations
for (let i = 0; i < 3; i++) {
  console.log("for loop:", i);
}

// while loop - runs while condition is true
let j = 0;
while (j < 3) {
  console.log("while loop:", j);
  j++;
}

// do...while loop - executes at least once
let k = 0;
do {
  console.log("do while loop:", k);
  k++;
} while (k < 3);

// for...in - iterate over object keys
const person = { name: "Saleem", age: 25 };
for (let key in person) {
  console.log("for in:", key, person[key]);
}

// for...of - iterate over iterable values (arrays, strings, sets, maps)
const fruits = ["Apple", "Banana", "Mango"];
for (const fruit of fruits) {
  console.log("for of:", fruit);
}

// Array forEach method
fruits.forEach(fruit => console.log("forEach:", fruit));

// Custom iterable with Symbol.iterator
const myNumbers = {
  [Symbol.iterator]: function() {
    let n = 0;
    return {
      next() {
        n += 10;
        return { value: n, done: n > 50 };
      }
    };
  }
};

for (const num of myNumbers) {
  console.log("custom iterable:", num);
}
