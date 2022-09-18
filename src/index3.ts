let marks1: number[] = [12, 32, 12]
let namesA: string[] = ["niki", 'priya', 'swapnil']

let deatil: {
    firstName: string,
    lastName: string,
    age: number,
    ismMarried: string
} = {
    firstName: "Athrav",
    lastName: "Ganvir",
    age: 23,
    ismMarried: "No"

}

//************Union Type****************** */

function add3(x: number | string, y: number | string) {

    if (typeof x == "number" && typeof y == "number") {
        console.log(x + y)
    }
    else {
        console.log(Number(x) + Number(y))//convert string into number
    }
}
add3(2, 6)
add3("3", "5")

// Union

type Result = number | string | boolean

let a: number | string = "30"
let b: string | boolean = true
let c: number | string = 23

let a1: Result = "10"
let a2: Result = 10


/*********************Literal********************/

type lastName = "jambhule" | "ganvir"
type firstName = "Niki" | "Nikhita"

let deatil4: {

    firstName: firstName,
    lastName: lastName

} = {
    firstName: "Niki",
    lastName: "ganvir"

}


//Program 1

type parent = {
    mother: string
    father: string
}

let detail5: parent = {
    mother: "manish",
    father: "pundlik"
}

console.log(detail5)


//Program 2

//let role = "read-only";
//let role2 = "read_and_write"
//let role3 = 'admin

enum Roles {
    "read_only" = 1,
    "read_and_write",
    "admin",
    "customer"
}
enum Account{

    "saving" = 1,
    "current"
}

if(Roles.read_only){
    console.log('reading only')
}

if(Roles.read_and_write){
    console.log("read and write")
}

if(Roles.customer){

}

if(Account.current){
    
}