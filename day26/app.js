//* write a function to find the nth Fibonacci number
//? The Fibonacci series is a sequence of number in which number (Fibonacci number) is the sum of the two preceding ones. It start with 0 and 1 subsequent numbers are calculated by adding the last numbers So, the fibonacci series looks like this 0,1,1,2,3,5,8,13,21 ..
// Fibonacci number is calculated using the following formula
//! F(n) = F(n-1) + F(n-2), where, F(1) = F(2) = 1
var fibonacciSeries = function (num) {
    if (num <= 1) {
        return num;
    }
    return fibonacciSeries(num - 1) + fibonacciSeries(num - 2);
};
console.log(fibonacciSeries(0));
console.log(fibonacciSeries(1));
console.log(fibonacciSeries(2));
console.log(fibonacciSeries(3));
console.log(fibonacciSeries(4));
