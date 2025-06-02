let accountId = 112323;

console.log(accountId);
console.log(typeof accountId)

// alert is used in browser only
console.log(3 +3)

// console.log(hitesh) // here hitesh is not defined 

console.log("hitesh") // here this is string

let name = "hitesh" // string 
let age = 18 //number => 2 to power 53
let isLoggedIn = false //boolean
let state; //undefined
let temperature = null     // object (it means empty but something is there)
let mySymbol = Symbol('description')  // symbol

console.table([typeof name, typeof age, typeof isLoggedIn, typeof state, typeof temperature, typeof mySymbol]) // to console multiple typeof variable