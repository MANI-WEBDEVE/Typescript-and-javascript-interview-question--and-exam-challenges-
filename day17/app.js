//*  Write a function to convert a string to camelCase & sanke_case
var toCamelCase = function (str) {
    var str1 = str.trim().split(' ');
    console.log(str1);
    var str2 = str1.map(function (curElm, index) {
        if (index === 0) {
            return curElm.charAt(0).toLowerCase() + curElm.slice(1);
        }
        else {
            var word = curElm.charAt(0).toUpperCase() + curElm.slice(1).toLowerCase();
            return word;
        }
    });
    return str2.join('');
};
console.log(toCamelCase("Muhammad inam INAM"));
var snackeCase = function (str) {
    var str1 = str.trim().split(' ');
    var str2 = str1.map(function (curElem, index) {
        if (index === 0) {
            return curElem;
        }
        else {
            return "_".concat(curElem);
        }
    });
    return str2.join('');
};
console.log(snackeCase('muhammad inam khan tahir khan'));
