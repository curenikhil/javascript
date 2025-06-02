// Arrays - 02

// indexing starts with 0 (.push by 0) | count start with as usual from 1 (.length start by 1)

const myArr = [0, 1, 3, 4, 5]
// console.log(myArr[0]);

const myHeros = ["shaktimaan", "Doga", "NaagRaj"]
// console.log(myHeros[0]);

const heroDc = ["Batman", "Captain Roob","Shaalimar"]
const heroChoco = ["Strawberry", "vanilla", "Tefola"]

const allHeros = heroDc.concat(heroChoco) // to concat to arrays
// console.log(allHeros)


const allNewHeros = [...heroDc, ...heroChoco]; // known as spread operator to concat multiple arrays
// console.log(allNewHeros);


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// console.log(another_array);

const real_another_array = another_array.flat(Infinity);
// console.log(real_another_array)


// to check 'given' is an array or not
// console.log(Array.isArray("hitesh")) 


// to create an array
console.log(Array.from("hitesh"));

console.log(Array.from({name: "hitesh"})); // this give an empty array


// to get multiple var in a single array
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // get multiple array in once