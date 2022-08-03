"use strict";
// const ob= {
//     name:"harshit",
//     age:21
// }
// console.log(ob);
const ob = {
    name: "harshit",
    age: 21
};
console.log(ob);
// arrays
let arr;
arr = ["a", "b"];
// arr=[1,2,33]   //error
// error Type 'number' is not assignable to type 'string
// to create array of multiple datatypes use "any"
let arr2;
arr2 = [1, "a"];
// for(let i of arr2){
//     console.log(i.toUpperCase());    
// }
arr = ["a", "b"];
// tuple
let tup; // it means the array should have only 2 elements first one is number and second one is string
// tup=["a",1] 
//  error voilates our rule
// tup=[1,"a",1]
// error voilates our rule of fixed length
tup = [1, "a"]; // ok
// one exception with tuple we can override our fixed length rule by pushing elemnt in arror tuple
tup.push("b");
console.log(tup);
//enums
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
// logs 404
console.log(StatusCodes.NotFound);
// logs 200
console.log(StatusCodes.Success);
//You can set the value of the first numeric enum and have it auto increment from that:
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections[CardinalDirections["North"] = 1] = "North";
    CardinalDirections[CardinalDirections["East"] = 2] = "East";
    CardinalDirections[CardinalDirections["South"] = 3] = "South";
    CardinalDirections[CardinalDirections["West"] = 4] = "West";
})(CardinalDirections || (CardinalDirections = {}));
// logs 1
console.log(CardinalDirections.North);
// logs 4
console.log(CardinalDirections.West);
