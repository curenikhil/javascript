// controlFlow: if 
let temperature = 50;

// if (temperature <=  50){
//     console.log("temperature is less than 50")
// } else {
//     console.log("temperature is more than 51")
// }



let score = 200

// if (score >= 200) {
//     const power = "fly"
//     console.log(`User power:${power}`)
// } else {
//     console.log("user has no power")
// }


// shortHand notation

let balance = 1000

// if (balance > 500) console.log("test");

/* 
that is called implicit scipe. here actually no scope but we consider there is a scope. And the execution covers only in one line...
 we can write multiple line using "," but when we use ";" it breaks it the conditionals.
 this is immature code and we should not use it. 
*/

// Nesting

// if (balance < 500) {
//  console.log("Recharge Your account")
// } else if (balance > 1000) {
//  console.log("Your Balance is Maximum")
// } else if (balance === 1000){
//     console.log("your balance is 1000" )
// } else{
//     console.log("Your balance is empty")
// };



/// Next step: more than one condition - "&&"

let userLoggedIn = true
let debitCard = true

if (userLoggedIn && debitCard) {
    console.log("allow to buy courses")
}


// any one of the conditional is true "||" (this is pipeline button)
let loggedInFromGoogle = false
let loggedInFromEmail = true

if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("user is logged in")
}