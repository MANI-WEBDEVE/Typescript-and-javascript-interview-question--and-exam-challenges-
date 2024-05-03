//* Write a function to calculate the sum of  all elements in an array. For example given the array [1,2,3], the function should return 14 because  1*1 + 2*2 + 3*3 + 4*4  = 14.


const arraySumCal = (num:number[]) => {
    // return num.reduce((accum, curElem) => accum = accum + (curElem * curElem) )


    let sum:number = 0;
    for (const element of num) {
        console.log(sum)
        sum = sum + (element*element)
    }
    return sum
}


console.log(arraySumCal([1,2,3]))