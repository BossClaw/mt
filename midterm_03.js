// 3 - shoppingList

// 3a. Create an array called shoppingList containing at least five items as strings.

// 3b. Implement a function called manageShoppingList that:
// Adds a new item to the end of the list.
// Removes the item at the start of the list.
// Uses a for...of loop to print each item in the shoppingList.
// Add a comment that says // Add an item called "extraItem" but do not include "extraItem" in the final list or print it.

let shoppingList = [
  "coffee",
  "pizza",
  "kittylitter",
  "tomato",
  "sponge",
  "potato",
];

function manageShoppingList(shoppingList, log_output = false) {
  // EASY DEBUGGING
  if (log_output) {
    console.log(
      `manageShoppingList (${shoppingList.length}) ${shoppingList}`
    );
  }

  // ADD TO END
  shoppingList.push("peanut butter");

  // REMOVE THE START
  shoppingList.shift();

  // LOOP
  shoppingList.forEach((item, idx) => {
    console.log(`ITEM(${idx}) ${item}`);
  });

  // Add an item called "extraItem" but do not include "extraItem" in the final list or print it.
}

manageShoppingList(shoppingList, true);