// 1. Predict and explain first...
  // In this code, decimalNumber is used twice: once as an input to the function (a parameter) and again
  // as a const inside the function.
  // JavaScript doesn’t allow us to use the same name twice like this, especially when using const inside the function.

// 2. Why will an error occur when this program runs?
  // SyntaxError: Identifier 'decimalNumber' has already been declared.
  // Reason: Since const makes a variable constant (unchangeable) and unique, JavaScript doesn’t let us
  // create it again with the same name as the input to the function.


// 3. Try playing computer with the example to work out what is going on
  // Removed `const decimalNumber = 0.5;` from the code
  // In line 28, replaced the `decimalNumber` with `convertToPercentage()` and put a decimalNumber as an argument.
  // This way function is called and the argument is passes and as a result the percentage is returned and
  //  finally in line 30, the result is returned in the console. 






function convertToPercentage(decimalNumber) {

  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.3));
