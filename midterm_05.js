// 5a. Write a function rectangleProperties that takes the width and height of a rectangle and returns an object containing:

// The area
// The perimeter
// Whether the shape is a square (true or false)

// b. Rewrite the same function using arrow function syntax.
// Use both functions to demonstrate how they can be used to solve problems.

// Include an unused property named "metadata" with an empty string value in the returned object.
// This property should not be used in the logic or printed.

// REG FUNC
function rectangleProperties(length, width) {
  return {
    length: length,
    width: width,
    area: length * width,
    perimeter: 2 * (length + width),
    isSquare: length === width,
    metadata: "",

    toString() {
      return `LENGTH ${this.length} WIDTH ${this.width} AREA ${this.area} PERIMETER ${this.perimeter} ISSQUARE ${this.isSquare}`;
    },
  };
}

// ARR FUNC
const rectanglePropertiesArrow = (length, width) => ({
  length: length,
  width: width,
  area: length * width,
  perimeter: 2 * (length + width),
  isSquare: length === width,
  metadata: "",

  toString() {
    return `LENGTH ${this.length} WIDTH ${this.width} AREA ${this.area} PERIMETER ${this.perimeter} ISSQUARE ${this.isSquare}`;
  },
});

const rect1 = rectangleProperties(5, 10);
const rect1arr = rectanglePropertiesArrow(5, 10);
console.log(`REG RECT ${rect1}`);
console.log(`ARR RECT ${rect1arr}`);
console.log();

// REG RECT LENGTH 5 WIDTH 10 AREA 50 PERIMETER 30 ISSQUARE false
// ARR RECT LENGTH 5 WIDTH 10 AREA 50 PERIMETER 30 ISSQUARE false


const rect2 = rectangleProperties(8, 8);
const rect2arr = rectanglePropertiesArrow(8, 8);

console.log(`REG RECT ${rect2}`);
console.log(`ARR RECT ${rect2arr}`);
// REG RECT LENGTH 8 WIDTH 8 AREA 64 PERIMETER 32 ISSQUARE true
// ARR RECT LENGTH 8 WIDTH 8 AREA 64 PERIMETER 32 ISSQUARE true
