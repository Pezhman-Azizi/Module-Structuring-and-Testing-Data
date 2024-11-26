// implement a function countChar that counts the number of times a character occurs in a string

// Given a string str and a single character char to search for,
// When the countChar function is called with these inputs,
// Then it should:

// Scenario: Multiple Occurrences
// Given the input string str,
// And a character char that may occur multiple times with overlaps within str (e.g., 'a' in 'aaaaa'),
// When the function is called with these inputs,
// Then it should correctly count overlapping occurrences of char (e.g., 'a' appears five times in 'aaaaa').

// Scenario: No Occurrences
// Given the input string str,
// And a character char that does not exist within the case-sensitive str,
// When the function is called with these inputs,
// Then it should return 0, indicating that no occurrences of the char were found in the case-sensitive str.


const { countChar } = require('./count'); // Import the function from count.js

describe('countChar', () => {
  test('returns correct count when the character exists in the string', () => {
    expect(countChar('hello', 'l')).toBe('l appears 2 times in hello');
  });

  test('returns correct count when the character appears once', () => {
    expect(countChar('world', 'w')).toBe('w appears 1 times in world');
  });

  test('returns correct message when the character does not exist in the string', () => {
    expect(countChar('hello', 'z')).toBe('no occurrences of the "z" were found in the "hello"');
  });

  test('handles an empty string input', () => {
    expect(countChar('', 'a')).toBe('no occurrences of the "a" were found in the ""');
  });

  test('is case-sensitive and counts only exact matches', () => {
    expect(countChar('Hello', 'h')).toBe('no occurrences of the "h" were found in the "Hello"');
  });

  test('works correctly when the character is a space', () => {
    expect(countChar('hello world', ' ')).toBe('  appears 1 times in hello world');
  });
});

