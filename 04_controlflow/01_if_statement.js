// ******************If Statement*************

// if (condition) { }

// const isUserLoggedIn = true


// <,>,<=,>=,==,!=,===[]


/* const score = 200

if (score > 100) {
    var power = "fly"
    console.log(`user power:${power}`);    // print block & global scope
}

console.log(`user power:${power}`)  */


/* const score = 200

if (score > 100) {
    const power = "fly"
    console.log(`user power:${power}`);   //print only block scope
}

console.log(`user power:${power}`)  */


/* const score = 200
if (score > 100) {
    let power = "fly"
    console.log(`user power:${power}`);   //print only block scope
}

console.log(`user power:${power}`) */


// const balance = 1000
// if (balance > 50) console.log("test"), console.log("test2")     // never used  method


//  ********************If-Else Statement ******************
/* const temperature = 41

if (temperature < 50) {
    console.log("less than 50");
}
else {
    console.log("temperature is greater than 50")
}
console.log("Execute") */


// *******************************Nested If Statement ********************

/*  
const balance = 1000

if (balance < 500) {
    console.log("less than");
}
else if (balance < 750) {
    console.log("less than 750")
}
else if (balance < 900) {
    console.log("less than 900")
}
else {
    console.log("less than 1200")
}     
    */

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2 == 3) {
    console.log("Allow to buy Course")
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User Logged In")
}


