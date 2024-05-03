var findMin = function (arr) {
    var sum = arr.sort(function (a, b) {
        console.log(a, "a");
        console.log(b, 'b');
        if (a > b)
            return 1;
        if (a < b)
            return -1;
        console.log(a);
        console.log(b);
        return 0;
    })[0];
    return "".concat(sum, " val");
    // return Math.min(...arr) //! SIMPLE METHOD
};
console.log(findMin([1, 2, 3]));
