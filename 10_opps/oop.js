
// Object literal 
const user = {
     username: "hitesh",
     loginCount: 9,
     signedIn: true,

     getUserDetails: ()=> {
        // console.log("Got user details from the database")
        console.log(`username: ${this.username}`)
     }
}
// console.log(user["username"])
// console.log(user["getUserDetails"]())

// object literal can't be used  for other this is something like a fixed value for specific 

// constructor
// Allows you to each that code in for multiple users - which creates or gives new instances using keyword "new"

function userConstructor (parameter1, parameter2, parameter3){
    this.username = parameter1,
    this.loginCount = parameter2,
    this.status = parameter3,

    // a method
    this.greeting =  () => {
        console.log(`Welcome!, ${this.username}`)
    }
}

let userOne = new userConstructor("Hitesh", 9, true)
console.log(userOne)
console.log(userOne.username);

let userTwo = new userConstructor("Cure", 12, false)
// lets change the value of userTwo as per constructor 
userTwo.username  = "Haris Ali Khan"

// console.log(userTwo.username)
// console.log(userTwo);

// lets call the method 
console.log(userTwo.greeting())