/*
Password Validation

Write a program that should check if a password is valid
and returns a boolean

To be valid, a password must:
- Have at least 5 characters.
- Have at least one English uppercase letter (A-Z)
- Have at least one English lowercase letter (a-z)
- Have at least one number (0-9)
- Have at least one non-alphanumeric symbol ("!", "#", "$", "%", ".", "*", "&")
- Must not be any previous password in the passwords array.

You must breakdown this problem in order to solve it. Find one test case first and get that working
*/
//--------------------------------------------------------- Approach 1 -----------------------------------------------


const passwordValidator = require("./passwordValidator");

describe("passwordValidator", () => {
  test("Validates a correct password", () => {
    expect(passwordValidator("Valid1!")).toBe(true);
  });

  test("Invalidates a password that's too short", () => {
    expect(passwordValidator("Ab1!")).toBe(false);
  });

  test("Invalidates a password without a special character", () => {
    expect(passwordValidator("Valid123")).toBe(false);
  });

  test("Invalidates a password without an uppercase letter", () => {
    expect(passwordValidator("valid123!")).toBe(false);
  });

  test("Invalidates a password without a lowercase letter", () => {
    expect(passwordValidator("VALID123!")).toBe(false);
  });

  test("Invalidates a repeated password", () => {
    expect(passwordValidator("Vh2hjo!")).toBe(false);
  });
});
