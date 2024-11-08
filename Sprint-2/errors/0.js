// 1. Predict and explain first...

    // Prediction: Since `str` is already declared as a parameter in the function, JavaScript won’t let us declare it again
    //  with let inside the function body.
    // I think this will cause an error because we’re trying to assign a new variable with the same name.

// 2. call the function capitalise with a string input.

    // Error: SyntaxError: Identifier 'str' has already been declared.

// 3. interpret the error message and figure out why an error is occurring.

    // From the error message, it is clear that it is a Syntax error.
    // `str` is already declared as the function’s input, so when we added `let str` inside the function,
    // it got confused. To fix it, I’ll just remove let and use str directly instead."

function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

console.log(capitalise("hello world!"));


// Additional explanation:
//  .toUpperCase return a character.
//  .slice returns a piece of string starting from a mentioned index. Which in this exercise it is; `1`.
