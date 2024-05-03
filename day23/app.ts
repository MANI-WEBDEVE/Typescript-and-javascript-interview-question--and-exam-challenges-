const numbers: number[] = [1,1,2,3,4,2,2,3,1,4,3,2];

const obj = {}

// for (const element of numbers) {
//     obj[element] = (obj[element] || 0 ) + 1
// }


for (let i = 0; numbers.length - i; i++) {
    obj[numbers[i]] = (obj[numbers[i]] || 0) + 1;
}
console.log(obj)