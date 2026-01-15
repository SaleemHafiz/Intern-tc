// Creating typed arrays
const intArray = new Int8Array([10, 20, 30, 40]);
console.log(intArray);

const floatArray = new Float32Array([1.5, 2.5, 3.5]);
console.log(floatArray);

// Accessing elements
console.log(intArray[1]);
console.log(floatArray[2]);

// Modifying elements
intArray[0] = 50;
floatArray[1] = 4.5;
console.log(intArray);
console.log(floatArray);

// Length of typed arrays
console.log("Length of intArray:", intArray.length);
console.log("Length of floatArray:", floatArray.length);

// Looping through a typed array
for (let i = 0; i < intArray.length; i++) {
  console.log(intArray[i]);
}
