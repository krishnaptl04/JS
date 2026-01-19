// console.log("K");
// console.log("R");
// console.log("I");
// console.log("S");
// console.log("H");
// console.log("N");
// console.log("A");

sayMyName()
function sayMyName() {
    console.log("K");
    console.log("R");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("N");
    console.log("A");
}


// sayMyName()

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);

// }

function addTwoNumbers(number1, number2) {

    // let result = number1 + number2
    // return result
    // console.log("Krishna");

    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result:", result);

// function loginUserMessage(username) {
//     if (username === undefined) {
//         console.log("please Enter the user name")
//         return
//     }
//     return `${username} just logged in`
// }

// loginUserMessage("krishna")

// console.log(loginUserMessage("krishna"))
// console.log(loginUserMessage())
//............. or............

// function loginUserMessage(username) {
//     if (!username) {
//         console.log("please Enter the user name")
//         return
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMessage())
// .............or................


function loginUserMessage(username) {
    if (!username) {
        console.log("please Enter the user name")
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Krishna"))

function calculateCartPrice(val1, val2, ...num1) {
    return num1

}
// console.log(calculateCartPrice(200, 400, 500, 20000))

const user = {
    username: "krishna",
    prices: 199
}

function handObject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handObject(user)
handObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));



