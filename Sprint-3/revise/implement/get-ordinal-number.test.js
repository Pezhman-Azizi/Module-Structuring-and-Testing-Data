// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

const getOrdinalNumber = require('./getOrdinalNumber'); // Import the function

describe('getOrdinalNumber', () => {
  test('returns "1st" for input 1', () => {
    expect(getOrdinalNumber(1)).toBe('1st');
  });

  test('returns "2nd" for input 2', () => {
    expect(getOrdinalNumber(2)).toBe('2nd');
  });

  test('returns "3rd" for input 3', () => {
    expect(getOrdinalNumber(3)).toBe('3rd');
  });

  test('returns "4th" for input 4', () => {
    expect(getOrdinalNumber(4)).toBe('4th');
  });

  test('returns "11th" for input 11', () => {
    expect(getOrdinalNumber(11)).toBe('11th');
  });

  test('returns "12th" for input 12', () => {
    expect(getOrdinalNumber(12)).toBe('12th');
  });

  test('returns "13th" for input 13', () => {
    expect(getOrdinalNumber(13)).toBe('13th');
  });

  test('returns "21st" for input 21', () => {
    expect(getOrdinalNumber(21)).toBe('21st');
  });

  test('returns "22nd" for input 22', () => {
    expect(getOrdinalNumber(22)).toBe('22nd');
  });

  test('returns "23rd" for input 23', () => {
    expect(getOrdinalNumber(23)).toBe('23rd');
  });

  test('returns "112th" for input 112', () => {
    expect(getOrdinalNumber(112)).toBe('112th');
  });

  test('returns "101st" for input 101', () => {
    expect(getOrdinalNumber(101)).toBe('101st');
  });

  test('returns "103rd" for input 103', () => {
    expect(getOrdinalNumber(103)).toBe('103rd');
  });
});
