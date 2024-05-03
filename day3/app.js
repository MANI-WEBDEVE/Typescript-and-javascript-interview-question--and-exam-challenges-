//
//todo: Interview Question: Count Occurrence of Character
//! Write a function called countChar that takes two parameter: astring and a character to count. The function return the number of times the specified character appears in the string ?

const countCharacter = (str, countChar) => {
  if (str.length === 0) {
    return false;
  }
  countChar = countChar.toLowerCase();
  str = str.toLowerCase();
  str = str.split("");
  let totalWord = str.map((item) => {
    if (item === countChar) {
      return item;
    } else {
      return "";
    }
  });
  return `total word ${totalWord.sort().join(" ").trim()}`;
};
console.log(countCharacter("Muhammad", "M"));

//todo: now this question solve reduce method
const stringCounter = (str, countStr, secondCounter) => {
  str = str.toLowerCase();
  countStr = countStr.toLowerCase();
  let totalWord = str.split("");
  totalWord = totalWord.reduce((accumelator, counterWord) => {
    if (counterWord === countStr || counterWord === secondCounter) {
      accumelator++;
    }
    return accumelator;
  }, 0);
  return totalWord;
};
console.log(stringCounter("InamMani", "m", "i"));
