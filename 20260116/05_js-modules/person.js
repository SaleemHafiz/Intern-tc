// Export multiple variables
export const name = "Saleem";
export const age = 28;

// Export a function
export function introduce() {
  return name + " is " + age + " years old.";
}

// Export a default object
const defaultPerson = {
  name: "Default",
  age: 30,
  greet() {
    return "Hi, I'm " + this.name;
  },
};

export default defaultPerson;
