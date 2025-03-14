// 1 - Basic Calculator Function

// Create a function named basicCalculator that takes three parameters:
//  two numbers and a string indicating an operation ("add", "subtract", "multiply", "divide").
// Based on the operation, perform the appropriate calculation and return the result.
// Include error handling for division by zero.
// Return "Division by zero error" in uppercase letters if the user attempts to divide by zero.

function basicCalculator(
  param_num_1,
  param_num_2,
  operation,
  log_ouput = false
) {
  // ENSURE NUMBERS
  // NOTE - THIS WILL ACCEPT NUMBERS AS STRINGS
  const num_1 = parseFloat(param_num_1);
  const num_2 = parseFloat(param_num_2);

  // EASY, IN-BUILT DEBUGGING
  if (log_ouput) {
    console.log(
      `basicCalulator ${param_num_1}(${num_1}) ${operation} ${param_num_2}(${num_2})`
    );
  }

  // HANDLE NUMBER INPUT NOT POSSIBLE TO PARSE TO NUMBERS
  if (isNaN(num_1)) {
    return `FIRST NUMBER IS NOT A NUMBER[${num_1}]`;
  }
  if (isNaN(num_2)) {
    return `SECOND NUMBER IS NOT A NUMBER[${num_2}]`;
  }

  // SWITCH INSTEAD OF CHAIN OF IF ELSE IFS
  switch (operation.toLowerCase()) {
    case "add":
      return num_1 + num_2;
    case "subtract":
      return num_1 - num_2;
    case "multiply":
      return num_1 * num_2;
    case "divide":
      // CAN'T DIV BY ZERO
      if (num_2 == 0) {
        return "DIVISION BY ZERO ERROR";
      } else {
        return num_1 / num_2;
      }
    case "mod":
      // CAN'T MOD BY ZERO
      if (num_2 == 0.0) {
        return "MOD BY ZERO ERROR";
      } else {
        return num_1 % num_2;
      }
  }

  // HANDLE IF NO VALID OPERATION PASSED
  return `INVALID OPERATTION[${operation}]`;
}

console.log(basicCalculator(100, 20, "add", true));
console.log(basicCalculator(100, 20, "suBTract", true));
console.log(basicCalculator(100, 20, "multiply", true));
console.log(basicCalculator(100, 20, "DIVIDE", true));
console.log(basicCalculator(100, 20, "mod", true));
console.log(basicCalculator(100, 20, "DOG", true));
console.log(basicCalculator(100, 20, "", true));
console.log(basicCalculator("One Hundred", 20, "add", true));
console.log(basicCalculator(100, "twenty", "add", true));
console.log(basicCalculator("100", 20, "add", true));
console.log(basicCalculator(100, "20", "add", true));
console.log(basicCalculator(null, 20, "add", true));
console.log(basicCalculator(100, "20", "subtract", true));

console.log(basicCalculator(10.5, 2.25, "add", true));
console.log(basicCalculator(10.5, 2.25, "suBTract", true));
console.log(basicCalculator(10.5, 2.25, "multiply", true));
console.log(basicCalculator(10.5, 2.25, "DIVIDE", true));
