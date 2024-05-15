//
//todo: Programming Challange : Sort an Array

//? Write a function to sort an array of numbers in an ascending order

const sortAscending1 = (arr) => {
  // return arr.sort((a, b) => a - b);
  return arr.sort();
};
let num = [12, 2, 34, 6, 45, 3, 9, 76, 5, 45, 33];
let result = sortAscending1(num);
// console.log(result);
//! Requirements:
//? The function should take an array of numbers an input.
//? it Should return a new array with the number sorted in ascending order.
//? The Original array should remain unChanged
//? You are not allowed to use the built-in-sort() Method

const sortAscending = (arr) => {
  // Create a new array to keep the original array unchanged
  const sortedArray = arr.slice();
  // console.log(sortedArray)

  // Bubble sort algorithm
  for (let i = 0; i < sortedArray.length - 1; i++) {
    
    for (let j = 0; j < sortedArray.length - 1 - i; j++) {
      
      if (sortedArray[j] > sortedArray[j + 1]) {
        // Swap elements if they are in the wrong order
       
          console.log(`${sortedArray[j + 1 ]}`) 


        console.log(sortedArray[j + 1]);
        console.log(sortedArray[j]);
       
        const temp = sortedArray[j];
       
        console.log(temp)
       
        sortedArray[j] = sortedArray[j + 1];
        
        // console.log(`first ${sortedArray[j]} and second ${sortedArray[j + 1]}`);
        
        sortedArray[j + 1] = temp;
        
        // console.log(sortedArray[j + 1] + " no");
        
        // console.log("vip");
      }
    }
  }

  return sortedArray;
};

// Test the function
const numbers = [2,1,2];
const sortedNumbers = sortAscending(numbers);

// console.log("Original array:", numbers); // Output: Original array: [5, 2, 9, 1, 3]
// console.log("Sorted array:", sortedNumbers); // Output: Sorted array: [1, 2, 3, 5, 9]
// console.log("and");
