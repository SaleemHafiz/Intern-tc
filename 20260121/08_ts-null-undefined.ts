// null and undefined with strictNullChecks
let value: string | null | undefined = null;
value = 'hello';
value = undefined;

// optional chaining
interface House { sqft: number; yard?: { sqft: number } }
function printYardSize(house: House) {
  const yardSize = house.yard?.sqft;
  console.log(yardSize === undefined ? 'No yard' : `Yard is ${yardSize} sqft`);
}
let home: House = { sqft: 500 };
printYardSize(home);

// nullish coalescing
function printMileage(mileage: number | null | undefined) {
  console.log(`Mileage: ${mileage ?? 'Not Available'}`);
}
printMileage(null);
printMileage(0);

// null assertion
function getValue(): string | undefined { return 'hello'; }
let value2 = getValue();
console.log('value length: ' + value2!.length);

// array bounds handling
let array: number[] = [1, 2, 3];
let value3 = array[0]; // type number | undefined with noUncheckedIndexedAccess

// union with null
function getName(): string | null { return null; }
let name: string | null = getName();
