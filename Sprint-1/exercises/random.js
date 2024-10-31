const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

console.log(num);

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

//------------------------------------------------ANSWER----------------------------------------------------------------------

// 1. Math.random():
// This part, Math.random(), gives us a random decimal number between 0 and 1. It could be something like 0.234 or 0.857—always between 0 and just under 1.

// 2. Making the random number bigger:
// We then multiply that random decimal by 100 (since (maximum - minimum + 1) calculates to 100).
// This turns the decimal into a bigger random number that’s somewhere between 0 and almost 100. For example, it could now be 45.67 or 98.23.

// 3. Rounding down to a whole number:
// Next, Math.floor(...) rounds down whatever number we have to the nearest whole number. If we had 45.67, it becomes 45. If it was 98.23, it becomes 98.
// At this point, we have a random whole number between 0 and 99.

// 4. Shifting the range to 1 through 100:
// Finally, we add 1 to our number. So, if our number was 45, it now becomes 46. If it was 98, it becomes 99.
// This gives us a random number between 1 and 100 (inclusive), just like we wanted.

