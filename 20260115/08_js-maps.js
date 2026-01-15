// Creating a map
const user = new Map([
  ["name", "Saleem"],
  ["age", 25],
  ["city", "Karachi"]
]);
console.log(user);

// Adding a new key-value pair
user.set("profession", "Developer");
console.log(user);

// Accessing values
console.log(user.get("name"));
console.log(user.get("age"));

// Checking for a key
console.log(user.has("city")); // true
console.log(user.has("country")); // false

// Removing a key
user.delete("age");
console.log(user);

// Size of the map
console.log("Map size:", user.size);

// Looping through a map
for (const [key, value] of user) {
  console.log(key, value);
}

// Clearing all entries
user.clear();
console.log(user); // empty map
