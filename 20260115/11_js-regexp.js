// Creating regular expressions
const pattern1 = /hello/;
const pattern2 = new RegExp("world");

// Testing patterns
console.log(pattern1.test("hello world")); // true
console.log(pattern2.test("hello world")); // true

// Matching patterns
console.log("hello world".match(pattern1)); // ["hello"]

// Replacing text
console.log("hello world".replace(pattern2, "JS")); // "hello JS"

// Using flags
const pattern3 = /a/gi; // global and case-insensitive
console.log("JavaScript and Java".match(pattern3)); // ["a", "a", "a", "a"]
