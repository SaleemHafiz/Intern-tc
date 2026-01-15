// Example of try, catch, and finally
try {
  let result = 10 / 0; // no runtime error, just Infinity
  console.log("Result:", result);

  // Manually throw an error
  throw new Error("Something went wrong!");
} catch (error) {
  console.log("Caught an error:", error.message);
} finally {
  console.log("This runs regardless of error.");
}

// Common error types
// ReferenceError: using a variable that is not defined
// TypeError: performing an invalid operation on a value type
// SyntaxError: invalid code syntax
// RangeError: value out of allowed range
