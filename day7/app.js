//
//? Write a function findMax thst takes an array of numbers as input and returns the maximum number in the array

const findMaxNum = (arr) => {
  return Math.max(...arr);
};

console.log(findMaxNum([1, 4, 6, 3, 7, 89]));