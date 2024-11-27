function find(str, char) {
  let index = 0;

  while (index < str.length) {
    if (str[index] === char) {
      return index;
    }
    index++;
  }
  return -1;
}

console.log(find("code your future", "u"));
console.log(find("code your future", "z"));

// The while loop statement allows us to do iteration - the repetition of a certain number of tasks according to some condition
// See the docs https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while

// Use the Python Visualiser to help you play computer with this example and observe how this code is executed
// Pay particular attention to the following:

// a) How the index variable updates during the call to find
// MY ANSWER: It starts at 0. And every time the while loop runs the index increments by 1.
// It will continue doing the same until it reaches the limit of less than the `str.length`.
//
// b) What is the if statement used to check
// MY ANSWER: It checks weather any of the characters of a given string (as input) matches with the given character(as input).
// If there is one character, the if statement is true and the `find` function returns the index value. If the condition is
// not true, the wile loop runs again and increment its value by one until it reaches its limit(str.length).

// c) Why is index++ being used?
// MY ANSWER: To increment the index value after every iteration of the loop.
// Ensures that the loop progresses through string one character at a time.
//  So basically if we don't have the `index++` the function remains at str[0] and never goes to the next character.

// d) What is the condition index < str.length used for?
// It ensures that index keeps incrementing till the last character of a given strings. In other words it makes sure that
// Every single character of the given string is checked. In addition it prevents the function exceeds accessing characters beyond
// string's length.
