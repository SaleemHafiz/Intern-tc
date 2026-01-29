// typeof type guard
function show(value: string | number) {
  if (typeof value === "string") return value.toUpperCase();
  return value.toFixed(2);
}

// instanceof type guard
class Cat { meow() {} }
class Dog { bark() {} }

function sound(animal: Cat | Dog) {
  if (animal instanceof Dog) animal.bark();
  else animal.meow();
}

// in operator type guard
type Admin = { role: "admin"; manage(): void };
type User = { role: "user"; read(): void };

function access(person: Admin | User) {
  if ("manage" in person) person.manage();
  else person.read();
}

// user-defined type guard
type Car = { wheels: 4 };
type Bike = { wheels: 2; type: string };

function isCar(v: Car | Bike): v is Car {
  return v.wheels === 4;
}

// discriminated union later

// assertion function later
