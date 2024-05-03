//*  Write a function to convert a string to camelCase & sanke_case

 
const toCamelCase = (str:string) => {
    let str1:string[] = str.trim().split(' ')
    console.log(str1) 
    let str2:string[] = str1.map((curElm:string, index:number) => {
        if(index === 0){
            return curElm.charAt(0).toLowerCase() + curElm.slice(1)
        } else {
            let word = curElm.charAt(0).toUpperCase() + curElm.slice(1).toLowerCase()
            return word
        }
    })
    return str2.join('')
}

console.log(toCamelCase("Muhammad inam INAM"))



const snackeCase = (str:string) => {
    let str1:string[] = str.trim().split(' ')
    let str2 = str1.map((curElem:string , index:number) => {
        if (index === 0) {
            return curElem
        } else {
            return `_${curElem}`
        }
    })
    return str2.join('')
}

console.log(snackeCase('muhammad inam khan tahir khan'))