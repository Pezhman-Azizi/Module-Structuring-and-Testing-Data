const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"

// 2. const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1);
// This line removes "p" from the penceString.
// penceString.length - 1 calculates the length of penceString minus one, which is the index of the last character.
// penceString.substring(0, penceString.length - 1) extracts the part of the string from the start up to (but not including) the last character. So "399p" would be "399".

// 3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
// Here, we ensure the pence amount has at least three characters by adding zeros at the start if necessary.
// padStart(3, "0") makes penceStringWithoutTrailingP at least 3 characters long by adding zeros to the start if it's shorter.

// 4. const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2);
// This extracts the pound portion of the price.
// paddedPenceNumberString.length - 2 calculates the length minus two, which targets all characters up to the last two.
// substring(0, paddedPenceNumberString.length - 2) gets everything from the start up to the last two characters, so "399" becomes "3" (representing £3).

// 5. const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0");
// This extracts the pence portion and ensures it has exactly two digits.
// paddedPenceNumberString.substring(paddedPenceNumberString.length - 2) takes the last two characters of paddedPenceNumberString. In this example, "399" becomes "99".
// padEnd(2, "0") ensures that the pence string has exactly two digits by adding a trailing zero if needed.

// 6. console.log(£${pounds}.${pence});
// This line formats the price in pounds and pence.
// £${pounds}.${pence} combines pounds and pence with a £ symbol at the start and a decimal point between them.
