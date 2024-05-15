//* write a function to calculate the factorial of a number. (using Recursive) 


//* Recursive:
// Recursive is aprogramming technique where  a function  calls itself  in order to solve  a problem . In essence, it`s a function that calls itself with smalller with smaller or simpler input untill it reaches a base case

//* Base Recursive:
// The base case is the condition in a recursive function that stops the recursive. It`s the point at which the function stops calling itself and return a value without further recursion. without a base case, the recursive function would continue calling itself indefinitely, leading to what`s knows as infinite recursion

//* Recursive Case:
// The recursive case is the condition in a recursive function that determies when  the function should call itself again, It`s typically an expression or condition that evalutes to true for certain inputs, indicating that further recursion is neccessary to solve the problem. Each recursive call should move closer to the base case. eventually leading to ternination of the recursion


//? 5 => 5 * 4 * 3 * 2 * 1
//? num => num * num - 1 * num - 2 * num - 3 * num - 4 

const factorialRecursive = (num:number) => {
    if (num === 1) {
        return 1
    } else {
        return num * factorialRecursive(num - 1)
    }
}


//! 5 => 5 *  4 <-- (factorial(5 - 1))
//! 5 => 4 *  3 <-- (factorial(4 - 1))
//! 5 => 3 *  2 <-- (factorial(3 - 1))
//! 5 => 2 *  1 <-- (factorial(2 - 1))

console.log(factorialRecursive(5))