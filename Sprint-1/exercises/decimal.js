const num = 56.5678;

// You should look up Math functions for this exercise https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

// Create a variable called wholeNumberPart and assign to it an expression that evaluates to 56 ( the whole number part of num )
// Create a variable called decimalPart and assign to it an expression that evaluates to 0.5678 ( the decimal part of num )
// Create a variable called roundedNum and assign to it an expression that evaluates to 57 ( num rounded to the nearest whole number )

// Log your variables to the console to check your answers


// the whole number part of num
const wholeNumberPart = Math.floor(num);

// the decimal part of num
const decimalPart = +(num - wholeNumberPart).toFixed(4); //.toFixed limits the decimal places in form of string. And the + sign turns the string to an integer.

// num rounded to the nearest whole number
const roundedNum = Math.round(num);


//logging the variables to the console
console.log(num);
console.log(wholeNumberPart);
console.log(decimalPart);
console.log(roundedNum);
