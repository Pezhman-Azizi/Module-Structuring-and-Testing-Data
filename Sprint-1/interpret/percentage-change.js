let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",",""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?

// c) Identify all the lines that are variable reassignment statements

// d) Identify all the lines that are variable declarations

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?



//----------------------------------------------------------ANSWER-------------------------------------------------------------------

// -----------------a) Function-calls:
// 1. carPrice.replaceAll(",", "") (in line 3)
// 2. Number(carPrice.replaceAll(",", "")) (in line 3)
// 3. priceAfterOneYear.replaceAll(",", "") (in line 4)
// 4. Number(priceAfterOneYear.replaceAll(",", "")) (in line 4)
// 5. console.log(...) (in line 8)

// -----------------b) where is the error?:
// in line 5.
// Reason: It is because `.replaceAll takes two arguments with a comma in between, We are missing that comma in between.
// How to fix: by adding a comma between two arguments.

// -----------------c) Variable reassignment
// line 4 and 5 are the variable reassignments
//
// -----------------d) Variable declaration
// lines 1, 2, 7 and 8
//
// -----------------e) Variable declaration
// The purpose of this expression is to take a string with commas (like "10,000"), remove the commas,
// and then convert it to a numeric type. This makes it possible to use carPrice in mathematical operations,
// as it is now a number without any formatting characters.
