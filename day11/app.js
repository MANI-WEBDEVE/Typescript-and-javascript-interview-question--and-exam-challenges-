// Write a function that a number as input and returns the sum of its digits.

// Example usage:

const sumFunction = (num) => {
  if (num.length === 0) {
    return false;
  }
  //todo: how to covert number into array form
  let arr = Array.from(String(num), Number);
  //   console.log(arr);
  arr = arr.reduce((accum, curVal) => {
    accum += curVal;
    return accum;
  });

  //   console.log(arr);
  return arr;
};
console.log(sumFunction(1234));
console.log(sumFunction(1239));
console.log(sumFunction(123));

const sum = (num) => {
  let sum = 0;

  while (num > 0) {
    let digit = num % 10;

    sum += digit;

    num = Math.floor(num / 10);
  }
  return sum;
};
console.log(sum(1234));
