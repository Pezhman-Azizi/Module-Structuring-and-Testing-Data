//--------------------------------------------------------- Approach 1 -----------------------------------------------

const passwords = ["passwords123", "Vh2hjo!", "Aklni4@"];
function passwordValidator(password) {
  if (password.length < 5) return false;

  const hasLowerCase = /[a-z]/.test(password);
  const hasUpperCase = /[A-Z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialCharacter = /[!#$%.*&]/.test(password);
  const repeated = passwords.includes(password);

  return hasLowerCase && hasUpperCase && hasNumber && hasSpecialCharacter && !repeated;
}

console.log(passwordValidator("Vh2hjoo!")); // Test case

module.exports = passwordValidator; // Export the function


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
