// here this is about strings method

const name = "hitesh"
const repoCount = 50

console.log(name + repoCount + "value") // old method

console.log("another method: string interpolation")
console.log(`My name is ${name} and my repocount is ${repoCount}`)

// another method to declare string

const gameName = new String("hitesh-hc") // gives methods and length
console.log(gameName[0]);

console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5))
console.log(gameName.indexOf("h")) 


const newString = gameName.substring(0, 4); // las char not include
console.log(newString);

const anotherSring = gameName.slice(-8, 4); // in this neg value can be assigned
console.log(anotherSring)


const newStringOne = "    hitesh     "
console.log(newStringOne);
console.log(newStringOne.trim()) // remove spaces only for whitespace and line terminators


const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace("%20", "-")) // replace the char with another char
console.log(url.includes('hitesh'));

const newSplit = "hitesh-hc-com"
console.log(newSplit.split('-'))