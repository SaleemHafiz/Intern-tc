// Creating an object
const person = {
  name: "Saleem",
  age: 25,
  profession: "Developer"
};

// Accessing properties
console.log(person.name);
console.log(person["age"]);

// Adding a property
person.city = "Karachi";
console.log(person.city);

// Updating a property
person.age = 26;
console.log(person.age);

// Deleting a property
delete person.profession;
console.log(person);
