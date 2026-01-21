// Casting with 'as'
let x: unknown = 'hello';
console.log((x as string).length);

// Casting with '<>'
let y: unknown = 'world';
console.log((<string>y).length);

// Force casting via unknown
let z = 'hello';
console.log(((z as unknown) as number).length); // prints undefined

// Exercise example
let someValue: unknown = "hello world";
let strLength: number = (someValue as string).length;
