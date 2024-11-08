// Predict and explain first...
//  This function gets a number turns it to a string and returns the last character.
//  This we we can access the last digit.

const num = 103;

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
// Problem: function in line 8 doesn't have any parameter. So it doesn't actually gets any input.
// And the calculation doesn't start. 
