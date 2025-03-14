// 4 - GRADES

// a. Create an array named grades that holds at least 6 numerical values.

// b. Write a function calculateAverage that takes this array as a parameter, calculates the average grade, and returns it.

// c. Modify the grades array using filter to create a new array named passingGrades that contains only grades greater than or equal to 50.
// Print both arrays.

// Round the average to one decimal place only if the sum of grades is an odd number.

let grades = [100, 10, 50, 25, 35, 85, 85, 85];

function calculateAverage(grades) {
  // CALC THE AVERAGE
  let grade_count = grades.length;
  let sum = grades.reduce((partialSum, a) => partialSum + a, 0);
  let avg = sum / grade_count;

  // ROUND THE AVG TO ONE DECIMAL IF SUM IS ODD
  if (sum % 2 != 0) {
    console.log(`SUM IS ODD(${sum}), ROUNDING AVG(${avg})`);
    avg = avg.toFixed(1);
  }

  // GET PASSING
  let passingGrades = grades.filter((grade) => grade >= 50);

  // PRINT BOTH ARRAYS
  console.log(`ALL GRADES (${grades.length}) ${grades}`);
  console.log(`PASSING GRADES (${passingGrades.length}) ${passingGrades}`);

  // RETURNS THE AVERAGE & PASSING GRADES
  return [avg, passingGrades];
}

const [avg, passing] = calculateAverage(grades, true);
console.log(`GRADES ${grades} AVG IS(${avg})`);