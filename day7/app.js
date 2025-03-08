//
//? Write a function findMax that takes an array of numbers as input and returns the maximum number in the array

// const findMaxNum = (arr) => {
//   return Math.max(...arr);
// };

const findMax = (arr) => {
  if (arr.length  === 0){
    return 0
  }

  let max = arr[0]

  for(let i = 1; i < arr.length; i++) {
    if(arr[i] > max){
      max = arr[i]
    }
  }
  return max
}







console.log(findMax([1, 4, 6, 3, 722, 89]));