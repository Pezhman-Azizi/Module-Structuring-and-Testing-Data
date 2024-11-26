// function countChar(str, char){
//   let count = 0;
//   str.split("").forEach(element => {
//     if (element === char){
//       count+=1;}
//   });
//   if (count > 0){
//     return `${char} appears ${count} times in ${str}`;
//   }else{
//     return `no occurrences of the "${char}" were found in the "${str}"`;
//   }
// }
// // exports.countChar = {countChar};
// module.exports = { countChar };
function countChar(str, char) {
  let count = 0;
  str.split("").forEach(element => {
    if (element === char) {
      count += 1;
    }
  });

  if (count > 0) {
    return `${char} appears ${count} times in ${str}`;
  } else {
    return `no occurrences of the "${char}" were found in the "${str}"`;
  }
}

module.exports = { countChar };
