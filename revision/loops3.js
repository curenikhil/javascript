let nums = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let myFilter = nums.filter ( (item ) => {
//   return  item > 4 

}) 

let a = nums.filter( (item) => item > 4 )
// console.log(a )


let words = [ "tooth", "ear", "nose", "throat"]

// let b = words.filter( (item) => item.length == 3 )
let b = words.filter( (item) => item.includes("t") )

// console.log(b)


let c = words.filter(item =>  /^[et]/.test(item));

// console.log(c) // return the word that starts with either  e or t: return both if match with startsWith

let bodyParts = [
  { name: "tooth", type: "bone" },
  { name: "ear", type: "organ" },
  { name: "nose", type: "organ" },
  { name: "throat", type: "organ" }
];

let books = [
  { title: "1984", genre: "Dystopian", year: 1949 },
  { title: "To Kill a Mockingbird", genre: "Classic", year: 1960 },
  { title: "The Great Gatsby", genre: "Classic", year: 1925 },
  { title: "The Hobbit", genre: "Fantasy", year: 1937 },
  { title: "Harry Potter and the Sorcerer's Stone", genre: "Fantasy", year: 1997 },
  { title: "The Da Vinci Code", genre: "Thriller", year: 2003 },
  { title: "The Alchemist", genre: "Philosophical", year: 1988 },
  { title: "Pride and Prejudice", genre: "Romance", year: 1813 },
  { title: "The Fault in Our Stars", genre: "Young Adult", year: 2012 },
  { title: "The Shining", genre: "Horror", year: 1977 }
];

let search = books.filter( (item) => item.genre === "Classic");

let search2 = books.filter( (item) => {
  return  item.year > 2000 &&  item.title.includes("Th")
} )
// console.log( search[0].title);
// console.log( search2);


// addinng nums in arr

let givenArr = [1, 2, 3 , 4, 5, 6, 7, 8, 9, 10]

const mapArr = givenArr.map( (item) => {
    return 10 + item
})

// console.log(mapArr);



let cartPrices = [ 100, 120 , 130 , 130, 34, 567, 89]

let total = cartPrices.reduce( (acc, curval) => acc + curval, 0  )


// console.log(total)


let shoppingCart = [
    { itemname: "js course", price: 999 },
    { itemname: "py course", price: 999 },
    { itemname: "c++ course", price: 999 }
];

let totalP = shoppingCart.reduce ( (acc, item) => {
    return acc + item.price
}, 0 )
console.log(totalP)