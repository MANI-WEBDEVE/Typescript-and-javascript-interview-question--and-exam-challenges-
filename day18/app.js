//* coding challenge
//? Write a function to check if a character is Uppercase or lowercase
//* constraints
//? The Input cahr will be a single character 
//? The Character can be any printable ASCII character 
//? You can assume that the input will always be a string of  length 1.
var isUpperCase = function (str) {
    if (str === str.toLowerCase()) {
        return true;
    }
    else {
        return false;
    }
};
var isLowerCase = function (str) {
    if (str === str.toUpperCase()) {
        return true;
    }
    else {
        return false;
    }
};
// Example
console.log(isUpperCase('g')); //* Output => true
console.log(isLowerCase('K')); //* Output = true
