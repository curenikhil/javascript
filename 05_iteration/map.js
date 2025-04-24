// map

let myNumbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let newNumbers = myNumbers.map((num) => num + 10)
// console.log(newNumbers);

// const newNums = newNumbers.map().map() // that is called chaining

const newNums = myNumbers.map((num) => num * 10 ).map( (num) => num + 8).filter( num => num >= 40 && num <= 100)
console.log(newNums)


// overview of last tutorials - five, six, seven is respectively about for-each, filter, map