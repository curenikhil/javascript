const accountId = 12134;
let accountEmail = "curenikhl@gmail.com";
// var accountPassword = "1234"  

/* we should avoid use of var so we have to define variable using let that can be changed and const that can reassigned 
accountCity = "Jaipur"
 const variable only declared once
*/

// accountId = 232132 

accountEmail = "nikhil@gmail.com" // here no need to write let because it is already declared
let accountPassword = "444494"
let accountCity = "Raipur"

// here email,city and account password changed except const
console.log(accountEmail)

let accountState;

// to show data in tabular structure
console.table([accountEmail, accountId, accountPassword, accountCity, accountState])


// let accountState; // to print accountState we need to define it before the console.log