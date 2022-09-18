
//Program 1
// function adition(x,y){

// console.log(x+y)

// }
// adition('12','13')


//Program 2

// function addition2(x,y)
// {
// if(typeof x == "number" && typeof y == "number"){
//     console.log(x + y)
// }
// else{
//     console.log('Enetr correct Input')
// }

// }
// //addition2(5,9)
// addition2('5','8')


//Program 3

function addition3(x: number, y: number, result: boolean, message: string): void {
    if (result) {
        console.log(message)
        console.log(x + y)
    } else {
        console.log("we have to provide correct input")
    }

}
//addition3(12,13,true,"welcome to typescript")
addition3(12, 13, false, "welcome to typescript")



//typeScript

let x: number = 125
let firstName: string = "Nikhita"
let result: boolean = true

//Program 4


function addition4(x: number, y: number, result: boolean, message: string): number {
    if (result) {
        console.log(message)
        console.log(x + y)
        return x + y
    } else {
        return 0
    }

}
addition3(12, 13, true, "welcome to typescript")


/********************************* **/

let info: object = {
    firstName: "Nikhita",
    lastName: "Ganvir",
    age: 30

}

console.log(info)

let info2: {
    firstName:string
    lastName:string
    age:number
}={
    firstName:"Nikhita",
    lastName:"Ganvir",
    age:32
}

console.log(info)