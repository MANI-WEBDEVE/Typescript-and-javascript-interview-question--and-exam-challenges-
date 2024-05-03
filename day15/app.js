//* Write a function to calculate the sum of  all elements in an array. For example given the array [1,2,3], the function should return 14 because  1*1 + 2*2 + 3*3 + 4*4  = 14.
var arraySumCal = function (num) {
    // return num.reduce((accum, curElem) => accum = accum + (curElem * curElem) )
    var sum = 0;
    for (var _i = 0, num_1 = num; _i < num_1.length; _i++) {
        var element = num_1[_i];
        console.log(sum);
        sum = sum + (element * element);
    }
    return sum;
};
console.log(arraySumCal([1, 2, 3]));
