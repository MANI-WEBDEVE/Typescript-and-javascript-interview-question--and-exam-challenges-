let arr=[1,2,3,4,6,7,8]
let max=Math.max(arr[0], arr[1])
let sMax=Math.min(arr[0], arr[1])

console.log(max)
console.log(sMax)

for(let i=2;i<arr.length;i++){
    if(arr[i] > max){
        sMax=max
        max=arr[i]
    } else if(arr[i] > sMax && arr[i] != max){
        sMax=arr[i]
    }
}
console.log(max)
console.log(sMax)

// reverse the array
// let i = 0
// let j = arr.length-1

// while(i<j){
//     let temp=arr[i]
//     arr[i]=arr[j]
//     arr[j]=temp
//     i++
//     j--
// }

// console.log(arr)


// all 0 left side and 1 right side
// let arr_1=[1,0,1,1,0,0,1,1,1,0]
let arr_1=[-1,1,-5,4,5,-2,-3,6]

let i=0;
let j=0;

while(i<arr_1.length){
    if(arr_1[i]<0){
        let temp=arr_1[i]
        arr_1[i]=arr_1[j]
        arr_1[j]=temp
        j++
    }
    i++
}
console.log(arr_1)