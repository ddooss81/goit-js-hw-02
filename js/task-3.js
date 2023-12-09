'use strict';
let result;
function checkAge(age) {
    if (age >= 18) {
        result = "You are an adult";
        return result;
    }
}

console.log(checkAge(1));
console.log(checkAge(18));

