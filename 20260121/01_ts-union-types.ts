// Function using union type
function printStatusCode(code: string | number) {
  console.log(`My status code is ${code}.`);
}

printStatusCode(404);
printStatusCode("404");

// Union type error example
function printStatusCodeUpper(code: string | number) {
  // console.log(code.toUpperCase()); // error because number does not have toUpperCase
  if (typeof code === "string") {
    console.log(code.toUpperCase());
  } else {
    console.log(code);
  }
}

// Union type operator example
function printId(id: number | string) {
  console.log(id);
}
