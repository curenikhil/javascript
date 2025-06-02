// > Declare objects: Literal & Constructor  ( 2 WAYS)


// Constructor - singleton

const user = new Object();
user.name = "Hitesh";
user.age = 25;

// Object.create() - this is a constructor method to declare an object
const mySym = Symbol("key1");  // to use symbol as symbol in object we use []

const obj = Object.create(null); // Creates an object with no prototype
obj[mySym] = "value"; // Symbol used as key correctly


// HERE Object literal
const jsUser =  {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "wednesday"]
}

//method to access the key

// console.log(jsUser.email) // insted of using this we use the second method 
// console.log(jsUser["email"])
// console.log(jsUser["full name"])
// console.log(jsUser[mySym])

// NOTE: to access value of the object we usually use . but in some case we use "[]"

// console.log(typeof jsUser[mySym])  //mySym is correctly defined and used as a Symbol, but the value stored is a string 

// console.log(jsUser.email)
// Object.freeze(jsUser)   // to not to be changed 
jsUser.email = "hitesh@chatGPT.com"
// console.log(jsUser.email)


jsUser.greeeting = function (){
    // console.log("Hello JS user")
    return "Hello JS user"  //  don't give unexpect undefined 
}
console.log(jsUser.greeeting());

jsUser.greeetingTwo = function (){
    // console.log(`Hello JS user, ${this.name}`)  // same here as greetig first
    return `Hello JS user, ${this.name}`
}

console.log(jsUser.greeetingTwo())
