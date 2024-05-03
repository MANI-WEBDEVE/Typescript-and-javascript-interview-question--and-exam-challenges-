//Challange: Factorial Finder
// the product of all positive integer less than or equal to n. The Factorial of 0 id defined as 1.

//! Here are some example of factorial calculation

//? factorial(0) => 1
//? factorial(1) => 1
//? factorial(2) => 2
//? factorial(3) => 6
//? factorial(4) => 24 ----> 4 x 3 x 2 x 1 = 24
//? factorial(5) => 120 ----> 5 x 4 x 3 x 2 x 1 = 120
//? factorial(6) => -----> 720

const factorial = (num) => {
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact = fact * i;
  }
  return fact;
};

console.log(factorial(5));
