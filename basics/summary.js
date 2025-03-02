// this is for datatypes summary

/*
officially there is only two types of datypes which 
is based on the how data is stored and accessed in memory


primitive datatypes: 
a type of call by value it means there is copy given and changes occur in copy 

7 types - 
String
Number
Boolean
Null (it means empty)
Undefined 
Symbol
BigInt



Non-Primitive Dataypes or Reference types
- 
Array
Objects
Functions

*/

// At this time im learnig from from youtube, i saw many ads that to learn co-pilot, chatGPT and other ai. This is our society to not build but "to use".

// javaScript is dynamically because not require to define variable type explictly

// to declare Symbol

const id = Symbol('123')
const anotherId = Symbol('123')

console.log( id == anotherId) // even if the value is same "Symbol" which is used to make it unique


// BigInt declaration
console.log("here the - bigInt")
const bigNumber = 34247990128019n
console.log(typeof bigNumber)



// Array
const heros = ["shaktiman", "naagraj", "doga"]

// objects
let myObject = {
    name: "hitesh",
    age: 22,
}

//Function 
let myFunction = function(){
    console.log("Hello World");
}
console.log(typeof myFunction)