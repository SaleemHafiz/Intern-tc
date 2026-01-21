// Numeric Enum - Default
enum CardinalDirections {
  North,
  East,
  South,
  West
}

let currentDirection = CardinalDirections.North;
console.log(currentDirection); // 0
// currentDirection = 'North'; // Error: Type '"North"' is not assignable to type 'CardinalDirections'

// Numeric Enum - Initialized
enum CardinalDirectionsInit {
  North = 1,
  East,
  South,
  West
}
console.log(CardinalDirectionsInit.North); // 1
console.log(CardinalDirectionsInit.West);  // 4

// Numeric Enum - Fully Initialized
enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400
}
console.log(StatusCodes.NotFound); // 404
console.log(StatusCodes.Success);  // 200

// String Enum
enum CardinalDirectionsString {
  North = 'North',
  East = "East",
  South = "South",
  West = "West"
}
console.log(CardinalDirectionsString.North); // "North"
console.log(CardinalDirectionsString.West);  // "West"

// Exercise: Define an enum
enum Direction {
  Up,
  Down,
  Left,
  Right
}
