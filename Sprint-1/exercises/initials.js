let firstName = "Creola";
let middleName = "Katherine";
let lastName = "Johnson";

// Declare a variable called initials that stores the first character of each string.
// This should produce the string "CKJ", but you must not write the characters C, K, or J in the code of your solution.

//we can get the first character of a variable (with the string value) by `.charAt(0)` and zero indicates the
// first index of the variable giving us the first character. 
const initials = firstName.charAt(0) + middleName.charAt(0) + lastName.charAt(0)
console.log(initials);
