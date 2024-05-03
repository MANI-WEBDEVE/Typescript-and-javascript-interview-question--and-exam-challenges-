// Write a function arraysAreEqual that takes two arrays arr1 and arr2 as input and returns true if the arrays are  equal (i.e.,  contain the same elements in the same order), and false otherwise.

const arraysAreEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let arrEqual = arr1.every(
    (currentValue, index) => currentValue === arr2[index]
  );

  return arrEqual;
};

console.log(arraysAreEqual([1, 2, 3], [1, 2, 3]));
console.log(arraysAreEqual([1, 2, 3], [1, 1, 3]));
