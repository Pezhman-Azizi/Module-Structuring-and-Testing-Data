function getOrdinalNumber(number) {
  const firstDigit = number % 10; // First digit of the number
  const secondDigit = number % 100; // Last two digits of the number

  let suffix = "th"; // Default suffix

  // Handle special cases for 11th, 12th, and 13th
  if (secondDigit >= 11 && secondDigit <= 13) {
    return `${number}${suffix}`;
  } else if (firstDigit === 1) {
    suffix = "st";
  } else if (firstDigit === 2) {
    suffix = "nd";
  } else if (firstDigit === 3) {
    suffix = "rd";
  }
  return `${number}${suffix}`;
}

console.log(getOrdinalNumber(45)); // "45th"
console.log(getOrdinalNumber(1)); // "1st"
console.log(getOrdinalNumber(2)); // "2nd"
console.log(getOrdinalNumber(3)); // "3rd"
console.log(getOrdinalNumber(11)); // "11th"
console.log(getOrdinalNumber(112)); // "112th"

module.exports = getOrdinalNumber; // Export the function
