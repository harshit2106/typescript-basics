"use strict";
// union (OR): giver us a flexibilitity to choose datatypes.
// Union types are used when a value can be more than a single type.
// Such as when a property would be string or number.
function combine(param1, param2) {
    if (typeof param1 === "number" && typeof param2 === "number") {
        console.log(param1 + param2);
    }
    else {
        console.log(param1.toString() + param2.toString());
    }
}
combine(2, 3);
combine("har", "shit");
function printStatusCode(code) {
    console.log(`My status code is ${code}.`);
}
printStatusCode(404);
printStatusCode('404');
function combine2(param1, param2) {
    if (typeof param1 === "number" && typeof param2 === "number") {
        console.log(param1 + param2);
    }
    else {
        console.log(param1.toString() + param2.toString());
    }
}
combine2(2, 3);
combine2("har", "shit");
