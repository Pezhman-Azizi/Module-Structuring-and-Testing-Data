// Given a positive integer num,
// When the isPrime function is called with num as input,
// Then it should check if the num is prime

const isPrime = require('./is-prime');

describe("isPrime", () => {
  it("should return false for numbers less than or equal to 1", () => {
    expect(isPrime(-1)).toBe(false);
    expect(isPrime(0)).toBe(false);
    expect(isPrime(1)).toBe(false);
  });

  it("should return true for a prime number", () => {
    expect(isPrime(2)).toBe(true);
    expect(isPrime(3)).toBe(true);
    expect(isPrime(5)).toBe(true);
    expect(isPrime(13)).toBe(true);
  });

  it("should return false for a non-prime number", () => {
    expect(isPrime(4)).toBe(false);
    expect(isPrime(9)).toBe(false);
    expect(isPrime(20)).toBe(false);
  });

  it("should handle large prime numbers", () => {
    expect(isPrime(101)).toBe(true);
  });

  it("should handle large non-prime numbers", () => {
    expect(isPrime(100)).toBe(false);
  });
});
