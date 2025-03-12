// for in loop
let myObject = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift"

}

// for (const key in myObject) {
//     console.log(key)
// }

// for (const key in myObject) {
//         console.log(`${key} is shortct for ${myObject[key]}`)
// };


let myArray = ["js", "ks", "ls", "ms"]

// Array has bydefault keys start with 0,1,2,3,4....
for (const key in myArray) {
    console.log(myArray[key])
}
        

let map = new Map()
map.set("IN", "India")
map.set("USA", "united state of america")
map.set("FR", "France");

for (const key in map) {
   console.log(key)
}
// here map is not iteratable using for-in loop