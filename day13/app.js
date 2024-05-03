// Write a function that takes a string as input and returns the count of vowels in that string.Consider 'a', 'e','i','o','u' as vowel {both lowercase and uppercase}

const countVowel = (str) => {
  let vowel = ["a", "e", "i", "o", "u"];
  str = str.split("");
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowel.includes(str[i].toLowerCase())) {
      count++;
    }
  }
  return count;
};

console.log(countVowel("MUhammaD SAW"));
console.log(countVowel("Helloo Worlde"));
console.log(countVowel("inam mani"));

