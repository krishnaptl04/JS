const user = {
    username: "Krishna",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username},welcome to website`);
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// we are in node environment this refer to empty object bcz no global value nthi

// function tea() {
//     let username = "Krishna"
//     console.log(this);
// }
// tea()

// function tea() {
//     let username = "Krishna"
//     console.log(this.username);
//     //function k under hum  this.username use nhi kar sakte hai
//     // only use in object
// }
// tea()

// const tea = function () {
//     let username = "Krishna"
//     console.log(this.username);
// }
// tea()

// const tea = () => {
//     let username = "Krishna"
//     console.log(this.username);
// }
// tea()

const tea = () => {
    let username = "Krishna"
    console.log(this);
}
// tea()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3, 4))

// const addTwo = (num1, num2) => (num1 + num2)

// console.log(addTwo(3, 4))

// const addTwo = (num1, num2) => num1 + num2

// console.log(addTwo(3, 4))

// const addTwo = (num1, num2) => { username: "Krishna" }
// console.log(addTwo(3, 4))

const addTwo = (num1, num2) => ({ username: "Krishna" })
console.log(addTwo(3, 4))


const myArray = [2, 5, 3, 7, 8]

