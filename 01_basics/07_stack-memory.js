// Stack(Primitive), Heap(Non-Primitive)

let myYoutubename = "Krishnapateldotcom"

let anothername = myYoutubename
anothername = "KaurS"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "krishna@google.com"

console.log(userOne.email);
console.log(userTwo.email);

