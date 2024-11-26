function isPrime(number){

  console.log(number);

  if(number<=1) return false;

  for (let i = 2; i <= number-1; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrime(5));

module.exports = isPrime;
