//* Write a javascript function findMedian(arr) that takes an array of numbers as input and returns the median value. If the array has an even number of elements, return the average of the two middle values

//* for example, the median of 3, 3, 5, 9, 15 is 5. if there is an even number of obersevations, then there is no single middle value; the median is then usually defined  to be the mean of the two middle value: so the medain of 3, 5, 7, 9 is (5+7)/2 = 6

// let a:number = 3
// a *= 2
// console.log(a--)

const findMedian = (arr: number[]) => {
    arr.sort((a: number, b: number): number => a - b)

    let length: number = arr.length
    let mid: number = Math.floor(length / 2)
    // console.log(mid)
    // console.log(arr[mid])

    if (length % 2 === 0) {

      return (arr[mid] + arr[mid - 1]) / 2

    } else {
        return arr[mid]
    }
}

 

console.log(findMedian([1, 3, 4, 5,9,8]))