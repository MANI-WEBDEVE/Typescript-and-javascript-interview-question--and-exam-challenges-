//* write =a function called calculateMean that takes an array of numbers as input and returns the mean ( average ) of those numbers


//todo: In math, the mean is the average of a set of numbers, of the numeric value thet represent the center of collection of number

const meansCalculate = (arr: number[]):number => {
    if (arr.length === 0 ) {
        return 0
    }

    let sum:number = arr.reduce((accum:number, curElem:number) => {
        // console.log(accum)
        return  accum + curElem
    })
    
    return sum
}


console.log(meansCalculate([1,2,3,4,5]))
console.log(meansCalculate([5,4,3,6,3]))
