"use strict";
//Program 1
// function add(x: number, y: number):undefined {
//     console.log(x + y)
//     return;
// }
// let s = add(5, 14)
// console.log(s)//output undefined
//program 2
function add2(x, y, result, message) {
    if (result) {
        console.log(x + y);
        console.log(message);
        return x + y;
    }
    else {
        return 0;
    }
}
let s1 = add2(5, 14, true, "Hello");
console.log(s1);
//Program 3
//type object
let detail = {
    firstName: "nikhita",
    lastName: "ganvir",
    age: 32
};
console.log(detail);
let detail1 = {
    firstName: "nikhi",
    lastName: "ganvir",
    age: 32
};
let deatil2 = {
    firstName: "niki",
    lastName: "ganvir",
    isMarriad: "yes",
    mobile: 1234567
};
console.log(deatil2);
/************************************************************** */
let marks = [13, 44, 5];
let names = ["niki", "priya", "swapnil"];
console.log(marks);
console.log(names);
//program 4 tuple
let marksB = [12, 12];
marksB.push(23); //exception
console.log(marksB);
