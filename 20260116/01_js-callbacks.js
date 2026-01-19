// Function sequence example
function display(message) {
  console.log(message);
}

function first() {
  display("Hello");
}

function second() {
  display("Goodbye");
}

second();
first();

// Callback for sequence control
function calculator(a, b, callback) {
  const sum = a + b;
  callback(sum);
}

calculator(5, 5, function (result) {
  console.log("Sum:", result);
});

// Callback with array processing
const numbers = [4, 1, -20, -7, 5, 9, -6];

function removeNegative(arr, callback) {
  const result = [];
  for (const x of arr) {
    if (callback(x)) {
      result.push(x);
    }
  }
  return result;
}

const positiveNumbers = removeNegative(numbers, function (x) {
  return x >= 0;
});

console.log(positiveNumbers);

// Asynchronous callback example
setTimeout(function () {
  console.log("Callback executed after delay");
}, 1000);
