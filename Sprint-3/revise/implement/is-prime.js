function isPrime(number) {
  if (number <= 1) return false; // 0 and 1 are not prime numbers
  if (number <= 3) return true; // 2 and 3 are prime numbers

  // Exclude even numbers and numbers divisible by 3
  if (number % 2 === 0 || number % 3 === 0) return false;

  // Check factors from 5 to √number, skipping even numbers
  for (let i = 5; i * i <= number; i += 6) {
    if (number % i === 0 || number % (i + 2) === 0) return false;
  }

  return true;
}

// Test cases
console.log(isPrime(2)); // true
console.log(isPrime(3)); // true
console.log(isPrime(4)); // false
console.log(isPrime(17)); // true
console.log(isPrime(20)); // false
console.log(isPrime(23)); // true
console.log(isPrime(49)); // false
console.log(isPrime(97)); // true

module.exports = isPrime; // Export the function
