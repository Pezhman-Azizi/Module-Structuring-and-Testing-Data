Open a new window in Chrome,

then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console,
invoke the function `alert` with an input string of `"Hello world!"`;

What effect does calling the `alert` function have?
 This means you can enter JavaScript commands in the console tab and the V8 engine can run them quickly. It shows you the result as the string i have put there as a string in the quotation marks.


Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myName`.

What effect does calling the `prompt` function have?
 This what i have done:
 1. Used `prompt` to show a box with an input so user can type in their names by `prompt("What's your name?");`and user can type in their names and hit `ok`
 2. Defined a variable which stores the piece of information that user types in `myName` variable by `let myName = prompt("What is your name?");`.

What is the return value of `prompt`?
 This way user can use the variable later in the code any time they want. And it would be whatever they type in response to that `prompt`.
