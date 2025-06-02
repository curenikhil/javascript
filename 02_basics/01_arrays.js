

// arrays - 01

const myArr = [ 0, 1, 2, 3, 4, 5]
// console.log(myArr)       // Declare all the value of arr
// cconsole.log(myArr[1])   // Declare specific value of arr


// Alternate methods to create Array 
const myHeros = new Array("shaktiman", "Doga");
const myArr2 = new Array(1, 2, 3, 4)

// console.log(myHeros)


// Arrays method 
myArr.push(6) // push - to insert new value at the last of array
// console.log(myArr)


myArr.pop() // to remove the last value from the Array
// console.log(myArr) 


myArr.unshift(9) // insert value in start of the array
// console.log(myArr) 


myArr.shift() // remove the value from the start of array
// console.log(myArr) 

// to check value is inside the arr or not
// console.log(myArr.includes(9)); 


// to check the index of the assigned array (must be in array)
// console.log(myArr.indexOf(2)); 


 // >To change the datatype to "String"
const newArr = myArr.join()

// console.log(myArr);             // the original array 
// console.log(newArr);           // the array changed into string
// console.log(typeof newArr)    // check typeof 


// > slice & splice 

console.log("original array", myArr);

const myn1 = myArr.slice(0, 3)    // last range  not includes + return a copy of selected range 
console.log( "slice array",  myn1);                // indexing start from 0 not 1 
console.log("original array", myArr);


const myn2 = myArr.splice(0, 3)    // last range not include + modify original array by insertig or deleting
console.log("splice array", myn2);

console.log("original array", myArr);