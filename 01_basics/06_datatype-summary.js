//  Primitive

// 7 types: String,Number,Boolean,Null,Undefined,Symbol,BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outSideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 1234567890n


// Reference (Non Primitive)

// Array,Objects,Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "krishna",
    age: 20,
}

const myFunction = function () {
    console.log("Hello World");
}

console.log(typeof outSideTemp);


// https://262.ecma-international.org/5.1/#sec-11.4.3

