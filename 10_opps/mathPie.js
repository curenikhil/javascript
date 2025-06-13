
console.log(Math.PI)

// lets check can we change the value of it 
Math.PI = 4
console.log(Math.PI)
// Ans => No we can't change the value 

// why we can't change this ? 
const discriptor = Object.getOwnPropertyDescriptor(Math, 'PI')
console.log(discriptor)
/*
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}
*/

// factory function to create obj 
// let obj = Object.create(null)


let chai = {
    name: "ginger chai",
    price: 10,
    isAvailbale: true,

    order: function(){
        console.log(`something went wrong`)
    }
}
console.log(chai)

// check discriptor property of key of obj

// console.log(Object.getOwnPropertyDescriptor(chai, "name"))


// define property of any key of a obj

Object.defineProperty(chai, "name" ,{
    writable: false,
    enumerable: false
})


// to check: run iteration(loop)

// this loop don't work on key "name"; loop runs but name has defined property not writable and not enumerable (or non iteratable)
for (let [key, value] of Object.entries(chai)) {
    
    //we use condition to avoid iterate function
    if( typeof value !== "function"){
            console.log(`${key}: ${value}`)
    } 
}