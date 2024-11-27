function repeat (str, int){
  if (int < 0){
    throw new Error("negative counts are not valid");
  }else if(int === 0){
    return "";
  }else if (int === 1 ){
    return str;
  }else{
    return str.repeat(int);
  }
}
console.log(repeat("hjsgdfl", 2));

module.exports = repeat;
