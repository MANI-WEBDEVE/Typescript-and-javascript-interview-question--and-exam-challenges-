//*  Write a function to reverse a string without using any built-in methods or libraries. The function should take a string and return the reversed string
var reverseStr = function (str) {
    var r_str = "";
    for (var i = str.length - 1; i >= 0; i--) {
        r_str = r_str + str[i];
    }
    return r_str.charAt(0).toUpperCase() + r_str.slice(1, 3) + r_str.charAt(3).toLowerCase();
};
console.log(reverseStr("Mani"));
