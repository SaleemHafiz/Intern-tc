// Creating a promise (producing code)
const myPromise = new Promise(function (resolve, reject) {
  const success = true;

  setTimeout(function () {
    if (success) {
      resolve("Operation successful");
    } else {
      reject("Operation failed");
    }
  }, 1000);
});

// Consuming the promise using then and catch
myPromise
  .then(function (result) {
    console.log(result); // fulfilled
  })
  .catch(function (error) {
    console.log(error); // rejected
  })
  .finally(function () {
    console.log("Promise completed");
  });

// Promise.allSettled example
const p1 = Promise.resolve("First");
const p2 = Promise.reject("Second");

Promise.allSettled([p1, p2]).then(function (results) {
  console.log(results);
});
