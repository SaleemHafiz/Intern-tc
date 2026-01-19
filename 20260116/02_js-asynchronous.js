// Synchronous execution
console.log("Start");

console.log("This runs immediately");

console.log("End");

// Asynchronous execution using setTimeout
console.log("Async start");

setTimeout(function () {
  console.log("This runs later");
}, 2000);

console.log("Async end");

// setTimeout with inline callback
setTimeout(function () {
  console.log("Inline callback after 1 second");
}, 1000);

// setInterval example
let count = 0;

const intervalId = setInterval(function () {
  console.log("Interval count:", count);
  count++;

  if (count === 3) {
    clearInterval(intervalId);
    console.log("Interval stopped");
  }
}, 1000);
