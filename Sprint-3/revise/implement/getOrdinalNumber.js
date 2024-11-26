function getOrdinalNumber(number){

  let firstDigit = number%10;
  let secondDigit = number%100;

  let suffix = "th";

  if(secondDigit >= 11 && secondDigit <= 13){
    return `${number}${suffix}`;
  }else if (firstDigit === 1){
    suffix = "st"
  }else if (firstDigit === 2){
    suffix = "nd";
  }else if (firstDigit === 3){
    suffix = "rd";
  }
  return `${number}${suffix}`;
}
console.log(getOrdinalNumber(45));

module.exports = getOrdinalNumber; // Export the function
