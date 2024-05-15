//* write a function called findMode that takes an array of numbers as input and returns the mode of the array (the number that appears most frequently)
function findMode(arr) {
    var countNum = {};
    var maxVal = 0;
    var mode;
    for (var i = 0; i < arr.length; i++) {
        countNum[arr[i]] = (countNum[arr[i]] || 0) + 1;
        if (countNum[arr[i]] > maxVal) {
            maxVal = arr[i];
            mode = maxVal;
        }
    }
    return mode;
}
console.log(findMode([1, 2, 2, 3, 1, 3, 2, 1, 3, 2]));
