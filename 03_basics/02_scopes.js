// scope starts with words let, var and const
// here we understanding the concept of block-scope and function-scope
let a = 300

if (true) {
    let a = 10
    const b = 20
    // var c = 30 // don' use
    // console.log("INNER: ", a)
}


// console.log(a);
// console.log(b);

// Nested function
function one(){
    const username = "Hitesh"

    function two() {
        const website = "YouTube"
        console.log(username)
    }

    // console.log(website);
    two()
}


// one()

if (true) {
    const username = "Hitesh"

if(username=== "Hitesh") {
    const website = "YouTube"
    // console.log(username + website) // this is exceuitable
}
// console.log(website); // this is not exceuitable becuase of block scope
}
// console.log(username);

// ++++++++++++++++++++++++++ INTERESTING+  ++++++++++++++++++++++++++++++++


// ex-1
addone(5) // this can be access before initialization
function addone (num) {
    return num + 1
}

// addTwo(5) // this cannot be accessed before initialization i.e. known as hoisting
// ex-2
const addTwo = function(num) {
    return num + 2
}

addTwo(5) 





