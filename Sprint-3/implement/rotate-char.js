// The rotateCharacter function takes a character and a shift value as input.
// If the character is a letter (either uppercase or lowercase),
// it rotates the character by the specified shift value within the alphabet,
// considering wrapping around if necessary. Non-letter characters are returned unchanged.

// This function is commonly used for text encryption and decryption,
// where shifting characters by a certain value can obscure their meaning or reveal hidden messages.

// Acceptance criteria:

// Given a character and a shift value,
// When the function rotateCharacter is called with these inputs,
// Then it should:

// Scenario: Rotate Lowercase Letters:
// Given a lowercase letter character and a positive integer shift,
// When the function is called with these inputs,
// Then it should rotate the lowercase letter by shift positions within the lowercase alphabet, wrapping around if necessary,
// and return the rotated lowercase letter as a string.
// console.log(rotateCharacter("a", 3)); // Output: "d"
// console.log(rotateCharacter("f", 1)); // Output: "g"

// Scenario: Rotate Uppercase Letters:
// Given an uppercase letter character and a positive integer shift,
// When the function is called with these inputs,
// Then it should rotate the uppercase letter by shift positions within the uppercase alphabet,
// wrapping around if necessary, and return the rotated uppercase letter as a string.
// console.log(rotateCharacter("A", 3)); // Output: "D"
// console.log(rotateCharacter("F", 1)); // Output: "G"

// Scenario: Leave Non-Letter Characters Unchanged:
// Given a character that is not a letter (neither uppercase nor lowercase) and any positive or negative shift value,
// When the function is called with these inputs,
// Then it should return the character unchanged.
// This specification outlines the behavior of the rotateCharacter function for different input scenarios,
// including valid and invalid characters, and defines the expected output or action for each case.
// console.log(rotateCharacter("7", 5)); // Output: "7" (unchanged, not a letter)

// Scenario: Shifting a Character with Wraparound
// Given a character char within the lowercase alphabet range (e.g., 'z') or the uppercase alphabet range (e.g., 'Z'),
// And a positive integer shift that causes the character to wrap around the alphabet when rotated (e.g., a shift of 3 for 'z' or 'Z'),
// When the rotateCharacter function is called with char and shift as inputs,
// Then it should correctly rotate the character by shift positions within the alphabet while handling the wraparound,
// And the function should return the rotated character as a string (e.g., 'z' rotated by 3 should become 'c', 'Z' rotated by 3 should become 'C').
// console.log(rotateCharacter("z", 1)); // Output: "a" (preserves case, but wraps around)
// console.log(rotateCharacter("Y", 2)); // Output: "A" (preserves case, but wraps around)





// ------------------------------------------------------------ MY APPROACH------------------------------------------------------------------------------------------
// This approach works with ASCII (American Standard Code for Information Interchange) which assigns a unique numeric code for characters, including
// letters, digits and symbols. In this case we are dealing with letters only.
// Lower case letters range from 97 to 122 and uppercase letters range from 65 to 90.

function rotateCharacter(letter, shift) {
  const asciiValue = letter.charCodeAt(0); // Gets the ASCII value for the character

  shift = shift % 26; // Normalize the shift for large or negative values

  if (asciiValue >= 65 && asciiValue <= 90) { // Uppercase letters
    let rotatedAscii = asciiValue + shift;
    if (rotatedAscii > 90) {
      rotatedAscii -= 26; // Wraparound for uppercase
    } else if (rotatedAscii < 65) {
      rotatedAscii += 26; // Negative wraparound
    }
    return String.fromCharCode(rotatedAscii);
  } else if (asciiValue >= 97 && asciiValue <= 122) { // Lowercase letters
    let rotatedAscii = asciiValue + shift;
    if (rotatedAscii > 122) {
      rotatedAscii -= 26; // Wraparound for lowercase
    } else if (rotatedAscii < 97) {
      rotatedAscii += 26; // Negative wraparound
    }
    return String.fromCharCode(rotatedAscii);
  } else {
    return letter; // Leave non-letter characters unchanged
  }
}

// Test cases
console.log(rotateCharacter("z", -1)); // "y"
console.log(rotateCharacter("a", -1)); // "z"
console.log(rotateCharacter("A", 27)); // "B"
console.log(rotateCharacter("Z", 1)); // "A"
console.log(rotateCharacter("1", 5)); // "1" (unchanged)
console.log(rotateCharacter("!", 3)); // "!" (unchanged)
console.log(rotateCharacter(" ", 10)); // " " (unchanged)

