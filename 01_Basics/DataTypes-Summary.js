// Primitive

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 33290923898n


// Reference (Non Primitive)


// Array, Objects, Functions

const heros = ["shaktiman", "nagraj", "doga"]
let myObj={
    name: "Numan",
    age: 22,
}
const myFunction = function (){
console.log("Hello World");
}

console.log (typeof bigNumber);
console.log (typeof score);
console.log (typeof scoreValue);
console.log (typeof isLoggedIn);
console.log (typeof outsideTemp);
console.log (typeof id);
console.log (typeof anotherId);
console.log (typeof heros);
console.log (typeof myFunction);
