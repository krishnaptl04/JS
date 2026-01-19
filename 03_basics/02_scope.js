// let a = 10              //
// const b = 20           //
// var c = 300           //

let a = 300

if (true) {
    let a = 10
    const b = 20
    // var c = 30
    // console.log("INNER:", a);
}
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];

// }
// console.log(a);
// console.log(b);
// console.log(c);
one()
function one() {
    const username = "krishna"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two()

}

// one()

if (true) {
    const username = "Krishna"
    if (username === "Krishna") {
        const website = "youtube"
        console.log(username + website);
    }
    // console.log(website);

}

// console.log(username);


//**************************interesting **************** */

function addone(num) {
    return num + 1
}
addone(5)

const addtwo = function (num) {

}



// let arr = [2, 3, 4]
// console.log(arr[0])
// double
// const mappedArray = arr.map((value) => {
//     return value * 2
// // })

// const filterArray = arr.filter((value) => value > 2)

// console.log("arr", arr);

// console.log("mappedArray", mappedArray)
// console.log("filterArry", filterArray)


// let a = 10

// a = 20
// console.log(a)

// const b = 10
// console.log(b)

// for (let i = 0; i < arr.length; i++) {
// console.log(arr[i])
// }