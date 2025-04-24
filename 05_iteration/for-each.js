// for-each 
// .forEach() does not return a new array or modify the existing one. 
let coding =  ["js", "python", "java", "ruby", "cpp"]

// coding.forEach(function (val){
// console.log(val);
// });

// coding.forEach( (item) => {
//     console.log(item)
// });

// function printMe(item){
//  console.log(item)
// };

// coding.forEach(printMe);


// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// })

let myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "java",
        languageFileName: "java"
    }
];

myCoding.forEach( (item) => {
    console.log(item.languageName, item.languageFileName)
})