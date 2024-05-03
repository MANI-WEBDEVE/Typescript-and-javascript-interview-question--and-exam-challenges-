//
//todo: write a program Hash Tag Name Generator

const generater = (str) => {
  if (str.lenght > 280 || str.trim().lenght === 0) {
    return false;
  }
  str = str.split(" ");
  str = str.map((item) => item.replace(item[0], item[0].toUpperCase()));
  str = str.join("");
  return `#${str}`;
};

console.log(generater("this is inam"));

//? And Now we solve second method
const secondGenerator = (str) => {
  if (str.lenght > 280 || str.trim().lenght === 0) {
    return false;
  }
  str = str.split(" ");
  str = str.map((item) => item.charAt(0).toUpperCase() + item.slice(1));
  str = `#${str.join("")}`;
  console.log(str);
  return str;
};
console.log(secondGenerator("my name is name amdn asdjj hacker"));

// let myName = "pakistan and a beauty";
// myName = myName.split(" ");
// myName = myName.map((item) => item[0]);
// console.log(myName);
// let name = "pakistan is city";
// console.log(name.split(" "));
// name = name.replace(name[1], name[1]);
// console.log(name);
// name = name.join("");
// console.log(name);
// let nikeName = "muhammd Inam and now learn generative ai enginneer";
// nikeName = nikeName.split(" ");
// nikeName = nikeName.map((item) => item.charAt(0).toUpperCase() + item.slice(1));
// console.log(nikeName);
// let a = "123456789";
// console.log(a);
