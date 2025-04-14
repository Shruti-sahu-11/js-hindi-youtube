// how data s kept in memory and how to access data for this there is two categorization
//primitve and npon-primitive/

//primitive= whatevre we do changes will reflect in copy onlr
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

//referece type/non-primitive
//Array, Objects, Functions

const id = Symbol('123')
const anotherid = Symbol('123')
console.log(id === anotherid);

const bigNumber = 67867879718797n //n reperesnt big number

const heros = ["shaktiman", "naagraj","doga"];
let myObj={  //object data type
    name: "hitesh",
    age: 34,
}


//******////function */

const myFunction = function(){  //function object
    console.log("hello world")
}

// *****************************
//memory 1 stack 2 heap
//      primitive  non-primitive
//      you will get copy if any data moves in stack memory
//      but in heap you will get direct reference of that data

let myYoutubename = "hitesh"

