let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, "hitesh"]
// console.log(arr)

arr.push(9)
// console.log(arr)
arr.pop()
// console.log(arr)
arr.unshift('first')
// console.log(arr)
arr.shift();
// console.log(arr)

// console.log(arr.includes(6));

// console.log(arr.indexOf(0));

// console.log(arr.charAt(0))

let marvel = [ "ironMan", "Thor"]
let dc = [ "superman", "Flash", ["Lady Diana"]]
let mc = ["shaktiman", "doga", "Mr. India", ["simon sir"]]

let joint = marvel.concat(dc, mc).flat(Infinity)



let newJoin = joint.join();
// console.log(newJoin);


// slice 
// console.log(joint.length)
let sli = joint.slice(0, 2);
// console.log(sli)
let sli2 = joint.slice(1, 2);
// console.log(sli2)
// console.log(joint.length)

// splice 
// console.log(joint.length);
let spl = joint.splice(0,1);
// console.log(spl)
// console.log(joint.length)


// console.log(typeof joint)
let mcu = new Array("tony stark", "captain America", "Loki")
let dcu = ["Antman", "Aquaman", "Batman"]
// console.log(typeof mcu[0]) // string 

let multi = [...mcu, ...dcu]
// console.log(multi)


let original = ["original",[ 'a1', "a2", ["b1"]]]
// console.log(original);
let sub = ["sub"]
// console.log(sub);

let shallow = [...original, ...sub]
// console.log(shallow);

// shallow[1].unshift("ram")
// console.log(shallow)
// console.log(original);


let deepcopy = structuredClone(shallow)
// console.log(deepcopy);
original.unshift("sita")
// console.log(original)
// console.log(deepcopy);


// console.log(Array.isArray(joint))  // true or false
// console.log(Array.from("Hitesh"))        // transform into array   return 'h', 'i', 't', 'e', 's', 'h'

let str3 = joint.join()
// console.log(typeof str3);
let changedStr = Array.from(str3);
// console.log(changedStr)     // return 'h', 'i', 't', 'e', 's', 'h'


// console.log(Array.from({name: "hitesh"}))       // interesting case - we have to define to make array of key or value ; 



let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))