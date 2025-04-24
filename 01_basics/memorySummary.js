// Memory Allocation in Javascript
/*
two types: stack & heap

stack - Primitive type
we get a copy of declared variable and changes occur in that copy not in original


Heap - Reference type
we get the reference and changes occur in that original variable
*/

let myYoutubename = "hiteshdotcom"

let anotherYoutubename = myYoutubename

console.log(myYoutubename)
console.log(anotherYoutubename)

// here myYoutubename and anotherYoutubename is same 

anotherYoutubename = "chaiaurcode"

// we changed the value of anotherYoutubename and compare to above one 
console.log("another part")

console.log(myYoutubename);
console.log(anotherYoutubename);

console.log("example: Heap")

let userOne = {
 email: "user@google.com",
 upi: "user@ybl",

}
// userOne has differnt email
let userTwo = userOne
userTwo.email = "hitesh@google.log"
// userTwo has different email

console.log(userOne.email);
console.log(userTwo.email);

// we see that email is changed in both user because in Heap we get reference!