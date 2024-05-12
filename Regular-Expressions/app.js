//* email Addreas Validator
//? You`r tasked with implementation a function to validation addrease using a regular expression. write a function validatorEmail(email) that takes a string email as input and returns true if the email addrease is vaild according to the following rules
var emailValidator = function (email) {
    return /^[A-Za-z0-9]+(?:[.%_+][A-Za-z0-9]+)*@[A-Za-z0-9]+\.[A-Za-z]{2,}$/.test(email);
};
console.log(emailValidator("inamkhan@gmail.com"));
console.log(emailValidator("Muhammad.inamkhan@gmail.com"));
