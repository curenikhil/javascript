// Here, some basic comparison
console.log(2 > 1) // here 2 is greater 
console.log(2 < 1) // here 2 is not smaller than 1
console.log(2 >= 1) // here 2 is greater but not equal
console.log(2 == 1) // here 2 is not equal to 1
console.log(2 != 1) // here 2 is also not equal  to  1

console.log("main part")

console.log("2" > 1); // here datatype is different but result is true
console.log("02" > 1); // same here because datatype is not checked


console.log("null comparison")
console.log(null > 0); // result: is false because null is treated as "0" by comparison operator
console.log(null == 0); // false
console.log(null < 0); //false


console.log(null != 0); // true  here, null is something and equality operator don't treat null as "0"
console.log(null >= 0); // true

// we should avoid his type of comparison

/* here comparison and equlity check operator work differently
from the just above line, comparison converts null to number and
then equality check it as 0 and result is true 
*/

console.log("undefined part")

console.log( undefined > 2);
console.log( undefined < 2);
console.log( undefined >= 2);
console.log( undefined <= 2);
console.log( undefined == 2);


//below the strict check
// strict check means comparison of value and datatypes
console.log("strict check")

console.log(2 === 2); // datatype is same
console.log("2" === 2); // datatype is different

