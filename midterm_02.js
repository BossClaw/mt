// 2 - Write a function named favoriteFruits that:

// Takes an array of strings as a parameter, where each string is the name of a fruit.
// Uses a switch statement to log a different message depending on whether the fruit is "apple", "banana", "grape", or "mango".
// For any fruit not mentioned, log "I like all other fruits!".
// After the switch statement for "mango", add a comment indicating that "mango is the king of fruits".

function favoriteFruits(fruit_arr, log_ouput = false) {
  // EASY, IN-BUILT DEBUGGING
  if (log_ouput) {
    console.log(`favoriteFruits (${fruit_arr.length}) ${fruit_arr})`);
  }

  fruit_arr.forEach((fruit) => {
    switch (fruit.toLowerCase()) {
      case "apple":
        console.log("An apple a day keeps the doctor away!");
        break;

      case "banana":
        console.log("Monkey around with a banana!");
        break;

      case "grape":
        console.log("Don't let a grape sit, unless you're raising a raisin!");
        break;

      case "mango":
        // "mango is the king of fruits"
        console.log("MMMMMmmmmango!");
        break;

      default:
        console.log("I like all other fruits!");
        break;
    }
  });
}

favoriteFruits(["apple", "banana", "grape", "mango"], true);
console.log();
favoriteFruits(["BANAana", "pear", "grapefruit", "passionfruit"], true);

