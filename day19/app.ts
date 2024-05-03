//* Write a function to check if a given string starts with a specific substring 

//Input


//? str: A String (e.g "Heloo World").
//? subStr: A subString to check  if it start the give string (e.g "Hello")
//? Output : true if the given string starts with the specified subString, otherWise false

const startwith = (str:string, subStr:string) => {
    // if (str.startsWith(subStr)){
    //     return true
    // }
    //* other method 
    let otherChecker:boolean = str.toLowerCase().slice(0, subStr.length) === subStr.toLowerCase()
    console.log(otherChecker)
         
    let str3:string[] = str.split(' ')
    if(str3[0] === subStr){
        return true
    }else if (str3[0].toLowerCase() === subStr.toLowerCase()){
        return true
    } else if (str3[0].toUpperCase() === subStr.toUpperCase()){
        return true
    }
    else{
        return false
    }

    
   
}
console.log(startwith('muhammad Inam', 'Muhammad'))