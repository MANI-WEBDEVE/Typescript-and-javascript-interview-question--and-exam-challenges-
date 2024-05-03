// Write a fnction that takes an array of integers as input and remove any duplicate elements, returning a new array with only the unique elements.

const sameValRemover = (arr) => {
  let newArr = [...new Set(arr)];
  console.log(newArr);
};

console.log(sameValRemover([1, 2, 3, 4, 2, 1, 2, 5, 3, 2, 4, 6, 4, 2, 1]));
console.log(sameValRemover([1,2,3,2,1,3,1,2,1,23,1,]));

// The new Set() method in Javascript create a new Set Object. A set object is a collection of unique values. it can store any type of value, whether primitive or object refenrence
