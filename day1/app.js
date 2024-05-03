//
//? Write a function to check the string to other word string length

const checking = (str) => {
  if (str.trim().length === 0) {
    return false;
  }

  str = str.split(" ");

  str = str.sort((a, b) => b.length - a.length);
  str = str.join(" ")
  console.log(str);

};

checking("my name isa InamMani");
