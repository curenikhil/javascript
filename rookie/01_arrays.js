const originalLog = console.log;
console.log = (...args) => {
    originalLog(...args.map(arg => 
        Array.isArray(arg) ? JSON.stringify(arg) : arg
    ));
};

// arrays 

const myArr = [ 0, 1, 2, 3, 4, 5]
// console.log(myArr) // to declare all the value of arr
// cconsole.log(myArr[1]) // 



const myHeros = new Array("shaktiman", "Doga");

const myArr2 = new Array(1, 2, 3, 4)


// Arrays method 

myArr.push(6) // push - to insert new value at the last of array
// console.log(myArr)

myArr.push(7)
// console.log(myArr)



myArr.pop() // to remove the last value from the Array
// console.log(myArr) 


myArr.unshift(9) // insert value in start of the array
// console.log(myArr) 

myArr.shift() // remove the value from the start of array
// console.log(myArr) 


// node rookie/01_arrays.js

// console.log(myArr.includes(9)); // to check array is inside the arr or not
// console.log(myArr.indexOf(2)); // to check the index of the assigned arrray



const newArr = myArr.join() // to change the datatype to "String"
// console.log(myArr);
// console.log(newArr);

// console.log(typeof myArr)
// console.log(typeof newArr)



// slice & splice 

console.log("A", myArr);

const myn1 = myArr.slice(1, 3) // last range  not includes + extract the value from the array and manupulte
console.log("B", myArr);
console.log(myn1);

const myn2 = myArr.splice(1, 3) // last range not include
console.log("C", myArr);
console.log(myn2);