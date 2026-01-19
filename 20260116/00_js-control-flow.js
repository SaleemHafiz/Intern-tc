// Default flow (sequential)
let x = 5;
let y = 6;
let z = x + y;
console.log(z);

// Conditional control flow
let age = 20;
let status;

if (age >= 18) {
  status = "Adult";
} else {
  status = "Minor";
}
console.log(status);

// Loop control flow
for (let i = 0; i < 3; i++) {
  console.log("Loop value:", i);
}

// Jump statements
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break;
  }
  console.log("Break example:", i);
}

// Function flow
function multiply(a, b) {
  return a * b;
}
console.log(multiply(4, 5));

// Asynchronous flow using callback
setTimeout(function () {
  console.log("Callback executed");
}, 1000);

// Promise flow
const promiseExample = new Promise(function (resolve) {
  setTimeout(function () {
    resolve("Promise resolved");
  }, 1500);
});

promiseExample.then(function (message) {
  console.log(message);
});

// Async Await flow
async function asyncExample() {
  try {
    const result = await promiseExample;
    console.log("Async result:", result);
  } catch (error) {
    console.log(error);
  }
}

asyncExample();
