// async function always returns a Promise
async function sayHello() {
  return "Hello";
}

// Consuming the async function
sayHello().then((value) => {
  console.log(value);
});

// Basic async/await example
async function displayMessage() {
  const myPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("I love You !!");
    }, 2000);
  });

  const result = await myPromise; // wait for promise
  console.log(result);
}

displayMessage();

// Async/await with try-catch (error handling)
async function fetchData() {
  try {
    const promise = new Promise((resolve, reject) => {
      const success = true;
      setTimeout(() => {
        success ? resolve("Data loaded") : reject("Error loading data");
      }, 1000);
    });

    const data = await promise;
    console.log(data);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Async operation finished");
  }
}

fetchData();
