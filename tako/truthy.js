const userEmail = []

if(userEmail) {
    console.log("got user email")
} else {
    console.log("don't have user email")
};
// here we didn't compared to anything but here it is considered as true

/*
exept this all are truthy value

falsely value:
false
0
-0
bigInt 0n
""
null
undefined
NaN
*/

// to detect array is empty
if (userEmail.length === 0) {
    console.log("Array is empty")
};

// to detect object is empty
const emptyObject = {}

if(Object.keys(emptyObject).length === 0){
    console.log("Object is empty")
};

// Nullish coalescing Operator (??): null, undefined


let val1;
val1 = 5 ?? 10
val1 = null ?? 12
val1 = undefined ?? 22
val1 = null ?? 10 ?? 20 // it only return first value after null if value is not fetched

console.log(val1)


// terniary operator

// condition ? true : false

let teaPrice = 100
teaPrice <= 80 ? console.log("less than 80") : console.log("greater than 80");

