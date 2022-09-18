"use strict";
let marks1 = [12, 32, 12];
let namesA = ["niki", 'priya', 'swapnil'];
let deatil = {
    firstName: "Athrav",
    lastName: "Ganvir",
    age: 23,
    ismMarried: "No"
};
//************Union Type****************** */
function add3(x, y) {
    if (typeof x == "number" && typeof y == "number") {
        console.log(x + y);
    }
    else {
        console.log(Number(x) + Number(y)); //convert string into number
    }
}
add3(2, 6);
add3("3", "5");
let a = "30";
let b = true;
let c = 23;
let a1 = "10";
let a2 = 10;
let deatil4 = {
    firstName: "Niki",
    lastName: "ganvir"
};
let detail5 = {
    mother: "manish",
    father: "pundlik"
};
console.log(detail5);
//Program 2
//let role = "read-only";
//let role2 = "read_and_write"
//let role3 = 'admin
var Roles;
(function (Roles) {
    Roles[Roles["read_only"] = 1] = "read_only";
    Roles[Roles["read_and_write"] = 2] = "read_and_write";
    Roles[Roles["admin"] = 3] = "admin";
    Roles[Roles["customer"] = 4] = "customer";
})(Roles || (Roles = {}));
var Account;
(function (Account) {
    Account[Account["saving"] = 1] = "saving";
    Account[Account["current"] = 2] = "current";
})(Account || (Account = {}));
if (Roles.read_only) {
    console.log('reading only');
}
if (Roles.read_and_write) {
    console.log("read and write");
}
if (Roles.customer) {
}
if (Account.current) {
}
