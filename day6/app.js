//
//todo: Panaildrom question

//? this question reverse the string to exist same just like ---> 'oppo' = 'oppo'

const paildrome = (str) => {
  strReverse = str.split("").reverse().join("").trim();

  if (str === strReverse) {
    return `${strReverse} and ${true} `;
  } else {
    return false;
  }
};

console.log(paildrome(""));
