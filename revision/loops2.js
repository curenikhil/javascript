// for of > array specific

let arr = [ 1, 2, 3, 4, 5, 6]

for (const element of arr) {
    // console.log(element)
}


let str = "3Word"
for (const element of str) {
    // console.log(element)
}


let map = new Map()
map.set("IN", "India")
map.set("US", "united states of america")
map.set("FR", "France")
map.set("IN", "Republic of India") // this is duplicate and it won't feed 
// console.log(map);

for (const [key, value] of map) {
    // console.log(key, value)
}



let myObj = {
   js: "javascript",
   cpp: "c++",
   rb: "ruby"
}

// for (const [key, value] of myObj) {
//     console.log(key, value)
// } // this not work because it won't work on object 


for (const key in myObj) {
//    console.log(key)
}
// only keys 
for (const key in myObj) {
//   console.log(myObj[key])
}
// values 


for (const key in myObj) {
//   console.log(`${key} is file extension of ${myObj[key]}`)
}

let myArray = [ "one", "two", "three", "four"]
for (const key in myArray) {
//    console.log(myArray[key])
// console.log(key)
}


// let swap = new Map()
// swap.set("IN", "India")
// swap.set("US", "united states of america")
// swap.set("FR", "France")
// swap.set("IN", "Republic of India") 

// for (const key in swap) {
//     console.log(key)
// }  
// for in not work with Map



// for each 

let coding = [ "python", "javascript", "ruby", "php", "assembly", "simula", "binary"]


// by callback method - function name not defined, para passed
coding.forEach(  function (item) {
//   console.log(item)
})


// forEach by function and loop seperately - here function is defined and called inside loop with var coding 
function printMe (item){
    // console.log(item)
}

// coding.forEach(printMe)


coding.forEach( (i, j) => {
// console.log(i, j)
} ) 


let myCoding = [
    {
        languageName: "Javascript",
        fileName: "js"
    },
    {
        languageName: "python",
        fileName: "py"
    },
    {
        languageName: "Ruby",
        fileName: "rb"
    }

]

myCoding.forEach(  (item) => {
    // console.log(item["languageName"])
})

