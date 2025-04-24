// FILTER

// let coding =  ["js", "python", "java", "ruby", "cpp"]

// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item
// });

// console.log(values)

// here the values dont return the value

let myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// let newNums = myNums.filter((num) => num > 4 ) // here execution of implict return
let newNums = myNums.filter((num) => {
    return num > 4
} ) // here is explict return where we opened a scope we need use the keyword "return"
console.log(newNums)

// second method

let noNums = []
myNums.forEach((num) => {
    if (num > 4) {
        noNums.push(num)
    }
} )
console.log(noNums)


const books = [
    { title: "The Silent Echo", genre: "Mystery", publish: 2019, edition: "1st" },
    { title: "Shadow's Call", genre: "Fantasy", publish: 2021, edition: "2nd" },
    { title: "Echoes of Time", genre: "Sci-Fi", publish: 2018, edition: "3rd" },
    { title: "The Forgotten Realm", genre: "Fantasy", publish: 2020, edition: "1st" },
    { title: "Chronicles of the Lost", genre: "Adventure", publish: 2017, edition: "2nd" },
    { title: "The Final Descent", genre: "Thriller", publish: 2022, edition: "1st" },
    { title: "Through the Storm", genre: "Drama", publish: 2016, edition: "4th" },
    { title: "Nebula Rising", genre: "Sci-Fi", publish: 2019, edition: "2nd" },
    { title: "Legends Never Fade", genre: "Historical", publish: 2015, edition: "3rd" },
    { title: "The Phantom’s Secret", genre: "Horror", publish: 2023, edition: "1st" },
    { title: "Beyond the Horizon", genre: "Adventure", publish: 2020, edition: "2nd" },
    { title: "Enigma Files", genre: "Detective", publish: 2018, edition: "3rd" },
    { title: "The Cursed Tome", genre: "Horror", publish: 2021, edition: "1st" }
  ];
  
//   console.log(books);

// books.forEach((item) => console.log(item.title, item.genre))

const newBooks = []

books.forEach( (item) => {
   if(item.publish > 2020) {newBooks.push(item.title)}
})
console.log(newBooks)

const filterBooks = books.filter ((item) => item.publish > 2021);
// console.log(filterBooks.title)
console.log(filterBooks.map(book => book.title)); // get titles
console.log(books.filter(item => item.publish > 2021).length); // get count
// console.log(newBooks.length)

