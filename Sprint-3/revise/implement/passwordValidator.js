//--------------------------------------------------------- Approach 1 -----------------------------------------------

const passwords = ["passwords123", "Vh2hjo!", "Aklni4@"];
function passwordValidator(password){

  if(password.length < 5) return false;

  let hasLowerCase = (/[a-z]/.test(password));
  let upperCase = (/[A-Z]/.test(password));
  let hasNumber = (/\d/.test(password));
  let hasSpecialCharacter = (/[!#$%.*&]/.test(password));
  let repeated = passwords.includes(password);
  console.log(repeated);

  if(hasLowerCase && upperCase && hasNumber && hasSpecialCharacter && !repeated){
    return true;
  }else{
    return false;
  }
}
console.log(passwordValidator("Vh2hjoo!"));

module.exports = passwordValidator;

//-------------------------------------------------------- Approach 2 ------------------------------------------------

// function passwordValidator(password){

//   let passwords = ["123456", "lhjdsagf", "l!lKwe23i"];

//   let passwordArray = password.split("");
//   let passwordArrayLength = passwordArray.length;

//   let hasUppercase = false;
//   let hasLowercase = false;
//   let hasSpecialCharacter = false;
//   let hasNumber = false;

//   passwordArray.forEach(item => {
//     if (item === item.toUpperCase() && item !== item.toLowerCase()){
//       hasUppercase = true;
//     }
//     if(item === item.toLowerCase() && item !== item.toUpperCase()){
//       hasLowercase = true;
//     }
//     if (/[0-9]/.test(item)) {
//       hasNumber = true;
//     }
//     if(/[!#$%.*&]/.test(item)){
//       hasSpecialCharacter = true;
//     }
//   }
//   )
//   if(passwords.includes(password)){
//     return `invalid password`;
//   }

//   if (hasUppercase && hasLowercase && hasNumber && hasSpecialCharacter && passwordArrayLength >= 5){
//     return `valid password`;
//   }else{
//     return `invalid password`;
//   }
// }
// console.log(passwordValidator("123456"));

//---------------------------------------------------------------------------------------------------------
