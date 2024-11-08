// 1. Predict and explain first...
//  In line 6, the `a+b` is not placed correctly I think.
//  After running with node, it gives my an undefined output. The reason is that, right after the return
//  the function stops. The calculation in line 8 should be in line 7 as follows

function sum(a, b) {
  return a + b;
}

// I realized that the out put message also should be dynamic. So in line 10 and 11 i have defined
// variables which makes the text by console.log more dynamic. This way, each time we give arguments to call the function
// 

a= 0;
b= 32;
console.log(`The sum of ${a} and ${b} is ${sum(10, 32)}`);
