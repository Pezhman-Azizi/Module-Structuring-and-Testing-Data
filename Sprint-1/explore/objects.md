## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?
I get `ƒ log() { [native code] }`.
  It tells me that `console.log` is a function that logs (outputs) messages to the console.

Now enter just `console` in the Console, what output do you get back?
  This is what i get: `console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}`

Try also entering `typeof console`
  I get `'object'`.

Answer the following questions:

What does `console` store?
  The console object stores `methods(functions)` that you can use.
  These methods include; log, assert, error, warn.


What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
  `console.log` or `console.assert` means that we call a method (function) that belongs to the `console` object.
   The . (dot) lets you reach into an object to use its features. Here, it lets you get to `log` or `assert` inside console, so you can use those to show messages or check things in the Console.

   
