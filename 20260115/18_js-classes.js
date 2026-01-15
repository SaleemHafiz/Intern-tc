class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return "Hello, my name is " + this.name;
  }
}

const person1 = new Person("Saleem", 25);
console.log(person1.greet());

class Developer extends Person {
  constructor(name, age, skill) {
    super(name, age);
    this.skill = skill;
  }

  showSkill() {
    return this.name + " is skilled in " + this.skill;
  }
}

const dev1 = new Developer("Saleem", 25, "JavaScript");
console.log(dev1.showSkill());
