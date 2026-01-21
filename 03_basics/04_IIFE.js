//  Immediately Invoked Function Expressions (IIFE)


// function tea() {
//     console.log(`DB CONNECTED`)
// }
// tea()

// (function tea() {
//     console.log(`DB CONNECTED`)
// }
// )()

// ()()

//Use of IIFE:
// global scope k pollution se problem hoti hai kahi bar to iss global scope ya declaration  pollution k bachane se or hatane k liye (IIFE) ka use hota hai 

// (function tea() {
//     console.log(`DB CONNECTED`);
// })();         //; is important

// (function aurcode() {
//     console.log(`DB CONNECTED TWO`);
// })()

(function tea() {
    //named IIFE
    console.log(`DB CONNECTED`);
})();

((name) => {
    // unnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`);
})('Krishna') 