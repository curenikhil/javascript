"use strict";

// alert("hello"); // browser only 

let a = 3;
let b = "Cure";

let score = "33abc";
console.log(score);
// console.log(typeof score);
// let conversion = new Number(score);
// console.log(conversion);
// console.log(typeof conversion);


let score2 = null;
console.log(score2);

let login = Boolean(1);
// console.log(login);



// Symbol 

let id = Symbol(123);
let anotherId = Symbol(123);

// console.log(id === anotherId);  // value and datatype check: result alway false because symbol make unique even if the value is same 

let obj1 = {
    email: "me@cure.com",
    name: "Chandran"
}

// to access 
console.log(obj1.email);
obj1.email = "changed@cure.com"
console.log(obj1.email);