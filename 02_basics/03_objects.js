// singleton
// Object.create

// object literals

const MySym = Symbol("key1")


const JsUser = {
    name: "KriShna",
    "full name": "Krishna Patel",
    [MySym]: "mykey1",
    age: 21,
    location: "Ghej",
    email: "krishnaptl0414@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(typeof JsUser.MySym)
// console.log(JsUser[MySym])

JsUser.email = "krishna@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "krishna@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function () {
    console.log("Hello Js User");
}
JsUser.greetingTwo = function () {
    console.log('Hello Js User,${this.name}');
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());