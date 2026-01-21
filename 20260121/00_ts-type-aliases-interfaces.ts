// Primitive type aliases
type CarYear = number;
type CarType = string;
type CarModel = string;

// Object type alias
type Car = {
  year: CarYear;
  type: CarType;
  model: CarModel;
};

const carYear: CarYear = 2001;
const carType: CarType = "Toyota";
const carModel: CarModel = "Corolla";

const car: Car = {
  year: carYear,
  type: carType,
  model: carModel
};

// Intersection type example
type Animal = { name: string };
type Bear = Animal & { honey: boolean };

const bear: Bear = {
  name: "Winnie",
  honey: true
};

// Union type example
type Status = "success" | "error";
let response: Status = "success";

// Interface example
interface Rectangle {
  height: number;
  width: number;
}

const rectangle: Rectangle = {
  height: 20,
  width: 10
};

// Interface merging example
interface AnimalInfo {
  name: string;
}

interface AnimalInfo {
  age: number;
}

const dog: AnimalInfo = {
  name: "Fido",
  age: 5
};

// Extending interfaces
interface ColoredRectangle extends Rectangle {
  color: string;
}

const coloredRectangle: ColoredRectangle = {
  height: 20,
  width: 10,
  color: "red"
};
