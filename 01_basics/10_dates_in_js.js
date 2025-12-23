// Dates

// let MyDate = new Date()
// console.log(MyDate);
// console.log(MyDate.toString());
// console.log(MyDate.toDateString());
// console.log(MyDate.toISOString());
// console.log(MyDate.toJSON());
// console.log(MyDate.toLocaleDateString());
// console.log(MyDate.toLocaleString());

// console.log(typeof MyDate);

// let MyCreatedDate = new Date(2025, 0, 23)
// console.log(MyCreatedDate);
// console.log(MyCreatedDate.toDateString());

// let MyCreatedDate = new Date(2025, 0, 23, 5, 3)
// console.log(MyCreatedDate.toLocaleString());

// let MyCreatedDate = new Date("2025-01-14");
// console.log(MyCreatedDate.toLocaleString());

// let MyCreatedDate = new Date("01-14-2025");
// console.log(MyCreatedDate.toLocaleString());

let MyCreatedDate = new Date("01-14-2025");

let MyTimeStamp = Date.now()

// console.log(MyTimeStamp);
// console.log(MyCreatedDate.getTime());

// console.log(Math.floor(Date.now() / 1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay() + 1);
console.log(newDate.getMonth());

// '${newDate.getDay()} and the time

newDate.toLocaleDateString('default', {
    weekday: "long"
})


