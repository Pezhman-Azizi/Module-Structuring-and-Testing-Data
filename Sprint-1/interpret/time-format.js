const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// Six variable declarations in there

// b) How many function calls are there?
// There is only one function declaration on line #10.

// c) Using documentation, explain what the expression movieLength % 60 represents
// The % sign, gives us the remainder of movieLength in seconds.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// It calculates the total minutes by dividing the a big chunk in secondes (movieLength - remainingSeconds)
// regardless of the remaining seconds.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// It converts any number of seconds in to hours:minutes:seconds format.
// it can be named as formatted time

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// Yes the code still works and we should not forget that time is a positive value. it works just fine. It is only
//  for negative values that might not work!
