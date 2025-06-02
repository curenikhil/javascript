// constructor methods 

const tinderUser = new Object()
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
// console.log(tinderUser);


const regularUser = {
    email: "tata@bata.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname)
// another thing optional chaining - we learn in upcoming tutorials



// combine object
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

const obj4 = {obj1, obj2}
// console.log(obj4);                     // objects inside a object

const obj3 = Object.assign({}, obj1, obj2) // To Join multiple obj 
// console.log(obj3);                    // return values of all objects together in one object
//GOOD PRACTICE: use "{}" for adding multiple objects


// using spread operator: 2nd method to join Objects = Object.assign({}, )
// console.log({...obj1, ...obj2});       // same as Object.assign({}, x, y, z)

obj1.element = "ration"                   // adding another property in Object
// console.log({...obj1, ...obj2});       // check is okay: property added successful 



// when data fetched from db : retrun an array which holds objects 
const users = [
    {
        id: 1,
        email: "h@gpay.com"
    },
    {
        id: 2,
        email: "x@paytm.com"
    }
];
// console.log(users);
// console.table(users);
// console.log(users[1].email)                         // print specific value only from one object
// users.forEach(user => console.log(user.email));     // print specific value but from all objects 



console.log(tinderUser);

console.log(Object.keys(tinderUser))              // to get keys
console.log(Object.values(tinderUser))            // value
console.log(Object.entries(tinderUser))           // keys & value in seperated array in arrays type

console.log(tinderUser.hasOwnProperty('isLoggedIn'))   // to check the property (combined key + value) available or not