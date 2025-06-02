let score = 400
console.log(score);

// to define the type exclusively
let balance = new Number(100)
console.log(balance);

console.log(balance.toString().length)
console.log(balance.toFixed(2)) // for decimal values


//case: toPrecision - 
const otherNumber = 2382.8938
console.log(otherNumber.toPrecision(3)) // (2.38e+3) for digit control including decimal values
// here  digits are 4 + 4 and precison value is 3 then it goes into exponential


// case: to place comma

const hundreds =  10000000
console.log(hundreds.toLocaleString()) // default as us standard

console.log(hundreds.toLocaleString('en-IN')) // for indian standard

// there is concept of max value and min value which we know in browser
/*
Number
ƒ Number() { [native code] }
Number.MAX_VALUE
1.7976931348623157e+308
*/


// +++++++++++++++++++++++++++++++++ MATHS +++++++++++++++++++++++++++++++++++
console.log(Math);
console.log(Math.abs(-4));

console.log(Math.round(4.3)) // normal round-off

console.log(Math.ceil(4.2)); // to choose uper value
console.log(Math.floor(4.2)); // to choose lower value

console.log(Math.min(4, 1, 6, 0));
console.log(Math.max(4, 1, 6, 0));


console.log("Math.random")
console.log(Math.random()) // value from 0 to 1

console.log(Math.random()*10)
console.log((Math.random()*10) + 1); // to avoid 0


// example
console.log("min-max example")
const min = 1
const max = 2
 
// Math.random() * (max - min + 1)

console.log(Math.random() * (max - min + 1));

console.log(Math.floor(Math.random() * (max - min + 1)) + min) // to get desired output range  