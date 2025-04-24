// two ways to declare objects: Literal & Constructor
// Constructor - singleton

// here Object literal

// Object.create - this is a constructor method to declare an object
const mySym = Symbol("key1") // to use symbol as symbol in object we use []


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

console.log(jsUser.email) // insted of using this we use the second method 
console.log(jsUser["email"])
console.log(jsUser["full name"])
console.log(jsUser[mySym])
// to access value of the object we usually use . but in some case we use "[]"

console.log(typeof jsUser[mySym]) //mySym is correctly defined and used as a Symbol, but the value stored is a string 

console.log(jsUser.email)
// Object.freeze(jsUser)
jsUser.email = "hitesh@chatGPT.com"


jsUser.greeeting = function (){
    console.log("Hello JS user")
}

jsUser.greeetingTwo = function (){
    console.log(`Hello JS user, ${this.name}`)
}

console.log(jsUser.greeeting());

console.log(jsUser.greeetingTwo())
// node rookie/01_objects.js