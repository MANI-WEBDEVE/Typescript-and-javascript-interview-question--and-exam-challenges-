//* Write a Javasript function to count the occcurence of each element in an array store the counts in an object The keys of the object should represent the elements of the array and the values should represent the number of times each elements appears in the array.

//? Here,s what the function should do:

//* Accept an array of numbers as input .
//* Create an empty object called counts to store the counts of each elements.
//* Iterate through each numbers in the array.

//* for each number, increament the count in the counts object.
//* if the count for a number does not exist yet, intialize it to 1.

//* Return the counts object counting the counts of each elements

//Input
const numbers = [1, 1, 2, 3, 4, 2, 2, 3, 1, 4, 3, 2];

const obj = {};

for (const element of numbers) {
  obj[element] = (obj[element] || 0 ) + 1;
}


console.log(numbers.length)
// for (let i = 0; numbers.length - i; i++) {
//   obj[numbers[i]] = (obj[numbers[i]] || 0) + 1;
// }
console.log(obj);

const objects = {};

objects["name"] = "inam";

console.log(objects);
