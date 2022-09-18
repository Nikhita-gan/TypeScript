//Program 1

// function add(x: number, y: number):undefined {

//     console.log(x + y)
//     return;
// }
// let s = add(5, 14)
// console.log(s)//output undefined


//program 2
function add2(x: number, y: number, result: boolean, message: string): number {

    if (result) {
        console.log(x + y)
        console.log(message)
        return x + y
    }
    else {
        return 0
    }
}
let s1 = add2(5, 14, true, "Hello")
console.log(s1)


//Program 3
//type object

let detail:object={
  firstName:"nikhita",
  lastName:"ganvir",
  age:32
}
console.log(detail)

let detail1:{
    firstName:string,
    lastName:String,
    age:32
} = {
    firstName:"nikhi",
    lastName :"ganvir",
    age:32
}

//contact

type contact={
    firstName:string,
    lastName : string,
    isMarriad:string,
    mobile:number

}

type a = {
    firstName:string,
    lastName :string,
    age:number

}

let deatil2:contact={
    firstName:"niki",
    lastName : "ganvir",
    isMarriad:"yes",
    mobile:1234567

}

console.log(deatil2)

/************************************************************** */

let marks:number[] = [13,44,5]

let names:string[] = ["niki","priya","swapnil"]
console.log(marks)
console.log(names)

//program 4 tuple

let marksB:[x:number,y:number] = [12,12]
marksB.push(23)//exception
console.log(marksB)