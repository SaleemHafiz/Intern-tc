// generic function
function createPair<S, T>(v1: S, v2: T): [S, T] { return [v1, v2]; }
console.log(createPair<string, number>('hello', 42));

// generic class
class NamedValue<T> {
  private _value: T | undefined;
  constructor(private name: string) {}
  public setValue(value: T) { this._value = value; }
  public getValue(): T | undefined { return this._value; }
  public toString(): string { return `${this.name}: ${this._value}`; }
}
let value = new NamedValue<number>('myNumber');
value.setValue(10);
console.log(value.toString());

// generic type alias
type Wrapped<T> = { value: T };
const wrappedValue: Wrapped<number> = { value: 10 };

// generic class with default type
class NamedValueDefault<T = string> {
  private _value: T | undefined;
  constructor(private name: string) {}
  public setValue(value: T) { this._value = value; }
  public getValue(): T | undefined { return this._value; }
  public toString(): string { return `${this.name}: ${this._value}`; }
}
let valueDefault = new NamedValueDefault('myNumber');
valueDefault.setValue('myValue');
console.log(valueDefault.toString());

// generic function with extends constraint
function createLoggedPair<S extends string | number, T extends string | number>(v1: S, v2: T): [S, T] {
  console.log(`creating pair: v1='${v1}', v2='${v2}'`);
  return [v1, v2];
}

// generic array function
function getArray<T>(items: T[]): T[] { return new Array().concat(items); }
