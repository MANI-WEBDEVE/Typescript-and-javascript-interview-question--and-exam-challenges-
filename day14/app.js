// Question no 14 Write a function called isPowerOfTwo that takes an integer num as input and returns true if num is a power of two , and false otherwise

const isPowerOfTwo = (number) => {
  let power = false;
  for (let i = 1; i < number; i++) {
    if (2 ** i === number) {
      power = true;
    }
  }
  return power;
};

console.log(isPowerOfTwo(8));
console.log(isPowerOfTwo(4));

// Notes

// The input num will be a positive integer,
// Zero (0) and negative interger are not considered powers of two,
// The function should return true if the given number is a power of 2., and false otherwise.

// we can solve it using bitwise operator too but your chance to do it and let me know in the comment section
