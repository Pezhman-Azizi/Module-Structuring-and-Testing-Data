// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs


const penceString = "399p";

function toPounds(penceString){
  // Remove the trailing 'p' from the input string
  const penceStringWithoutTrailingP = penceString.substring(0,penceString.length - 1);

  // .padStart ensures it has at least three characters which means it makes sure that it has three digits.
  // And if it was less then three digits it adds 0 in the beginning of the number.
  const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");

  // Extract the pounds and pence parts
  const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2);
  const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0");

  return (`£${pounds}.${pence}`);
}

console.log(toPounds("30p"));


