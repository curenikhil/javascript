let score = 33;
// console.log(typeof score);   // number
// console.log(typeof (score));  // number



// suppose this data parsed from the frontend. then we don't know what exactly the datatype of the data


let stringScore = "33" // try different datatypes to know more..
// console.log(typeof stringScore)               // string 

let valueInNumber = Number(stringScore);         // changed String into number
// console.log(valueInNumber);                   // return 33 as number
// console.log(typeof valueInNumber);            // number

// suppose data is parsed is 33abc
let thirdScore = "null"
// console.log(thirdScore)                          // return null 
// console.log(typeof thirdScore)                   // string 

let thirdScoreValue = Number(thirdScore);
// console.log(thirdScoreValue)                    //return NaN
// console.log(typeof thirdScoreValue);            // number


// convertors = Number, Boolean, String
// conversion using Number : summary 

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0
// null => NaN



let isLoggedIn = 1      // try different datatypes to know more

// console.log(isLoggedIn)          // return 1 
// console.log(typeof isLoggedIn)   // Number datatype

let booleanIsLoggedIn = Boolean(isLoggedIn);

// console.log(booleanIsLoggedIn);                 // true
// console.log(typeof booleanIsLoggedIn);          // boolean datatypes 
  
// converion using Boolean
// 1 => true
// 0 => false
// "" => false (empty string)
// "hitesh" => true (something in string)



let someNumber = 24; // try different datatypes to know more..

// console.log(someNumber)                           // return 24
// console.log( typeof someNumber);                  // number

let stringSomeNumber = String(someNumber);

console.log(stringSomeNumber);                      // return 24 as string 
console.log(typeof stringSomeNumber);               // string 
