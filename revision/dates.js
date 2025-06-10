let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toString());

// console.log(myDate.toDateString());
// console.log(typeof myDate);

// console.log(myDate.toTimeString().substring( 0, 8))


let myCreatedDate = new Date( 2023, 4, 24)  // month start by 0 as index in js 
// console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString());

let indainDate = new Date("12-12-2025");
// console.log(indainDate.toLocaleDateString());

// console.log(indainDate.getTime());
// console.log(Date.now())

let nextDate = new Date();
// console.log(nextDate.getDay());
// console.log(nextDate.getMonth());  // index start by 0 
// console.log(nextDate.getFullYear());
// console.log(nextDate.getHours());
// console.log(nextDate.getMinutes());
// console.log(nextDate.getTime())

console.log(nextDate.toLocaleDateString('default', {
    weekday: "long"
}))