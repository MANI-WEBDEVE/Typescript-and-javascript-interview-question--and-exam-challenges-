// Challange: calculate the Average
//array of number as input and returns the average of those number.

//? Your function should

// Accept an array of number as input.
// Calculate the sum of all the numbers in the array.
// Divide the sum by the  total number of elements in the array to find the average .
// Return the calculated average

const calculateAverage = (arr) => {
    let total = arr.reduce((accumelator, currentElemet) =>{
        return accumelator + currentElemet
    }, 0)
    console.log(total)
    return total / arr.length
}

// Example Usage
console.log(calculateAverage([4, 5, 2, 10]));
