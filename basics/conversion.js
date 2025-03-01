let score = 33;
console.log(typeof score);
console.log(typeof (score));



// suppose this data parsed from the frontend. then we don't know what exactly the datatype of the data
console.log("Here the first part: Number")
let stringScore = "33" // try different datatypes to know more..

console.log(typeof stringScore)

let valueInNumber = Number(stringScore); // datatype = number
console.log(valueInNumber);
console.log(typeof valueInNumber);

// suppose data is parsed is 33abc
let thirdScore = "null"
console.log(thirdScore)

let thirdScoreValue = Number(thirdScore);
console.log(typeof thirdScoreValue);
console.log(thirdScoreValue);

// convertors = Number, Boolean, String
// conversion using Number

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0
// null => NaN

console.log("here the second-part:Boolean")

    let isLoggedIn = 1 // try the diferent datatypes to know more

    console.log(isLoggedIn)
    console.log(typeof isLoggedIn)

    let booleanIsLoggedIn = Boolean(isLoggedIn);

    console.log(booleanIsLoggedIn);
    console.log(typeof booleanIsLoggedIn);

// converion using Boolean
// 1 => true
// 0 => false
// "" => false (empty string)
// "hitesh" => true (something in string)

console.log("here the third-part: String")

let someNumber = 24; // try different datatypes to know more..

console.log(someNumber)
console.log( typeof someNumber);

let stringSomeNumber = String(someNumber);

console.log(stringSomeNumber);
console.log(typeof stringSomeNumber);
