// concat
let name = "curen ";
let repocount = 22;

// console.log( name +  + repocount);

// console.log(`hello, this is ${name} and my repocount is ${repocount}`)


let gameId = "hitesh-hc";
let gameName = new String(gameId); // string but typeof is object
console.log(gameName);
// console.log(typeof gameName); 

// console.log(gameName[0]);
// console.log(gameName.length);
// console.log(gameName.__proto__)
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('c'))


let newString  = gameName.substring(0,4);  // index start by 0 and here last index is not included
// console.log(newString);


let anotherString =  gameName.slice(-8, 4)
// console.log(anotherString);


let str1 = "  hitesh   "
console.log(str1)
let strTrim = str1.trim();
// console.log(strTrim);

let url = "https://cure.com/hitesh%20chaudhary"


console.log(url.replace('cure', '-'));

let newName = "rememberthepastthereisnowaytolovethegame";
console.log(newName.split(/(e)/));
