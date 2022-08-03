"use strict";
const add = (n1, n2, bool) => {
    const str = "the result is ";
    const result = n1 + n2;
    if (bool) {
        return str + result;
    }
    return n1 + n2;
};
// example
// let numb:number;
// numb="7"
// let nn:number=6
const num1 = 5;
const num2 = 2.5;
const bool = true;
const res = add(num1, num2, bool);
console.log(res);
