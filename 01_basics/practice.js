const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const name = "krishna"

// console.log(name.slice(3, 7))
// console.log("arr", arr)

// for (let i = 0; i < arr.length; i++) {
//     console.log(`2 * ${i + 1} = ${2 * (i + 1)}`)
// }  

//*
//* *
//* * *

// function printStar(row) {
//     let p = ""
//     for (let i = 1; i <= row; i++) {
//         for (let j = 1; j <= i; j++) {
//             p += "*";
//         }
//         p += "\n";
//     }
//     return p
// }

// i = 1
//   j=1
//   2>=1
// i=2
//  j=1
//  j=2
//i=3 
//
// console.log(printStar(3))

function reverseArray(arrays) {
    let r = []
    for (let i = arrays.length - 1; i >= 0; i--) {
        r.push(arrays[i])
    }
    return r
}
console.log(reverseArray(arr));
console.log(reverseArray([2, 3, 4, 5]));