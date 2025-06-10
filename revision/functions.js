function myFun (){
    console.log("charlin")
    console.log("champlin");
    console.log("cartoonist")
}
// myFun();

// function addNums(num1, num2){
//  console.log( num1 + num2)
// }
// addNums(1, 6)

function addNums(num1, num2){
//   let result = num1 + num2;
//   return result
return num1 + num2
  
}
let result = addNums(1, 6)
// console.log(result);


function loginMessage (username = "sam"){
    if(!username){
        console.log(`enter a username`)
    } else{
    return `${username}, just logged In`
    }
};

// console.log(loginMessage("samay"));

function calCart(...num1){
return num1
};

let listing = calCart(110, 120, 130, 140)
// console.log(listing)
let sum = listing.reduce((acc,val) => acc * val, 1)
// console.log(sum)

let user = {
    username: "Hitesh",
    price: 999
}

function handleObj (anyObj){
    console.log(`Hello ${anyObj.username}, You got a scholarship of ${anyObj.price}`)
}
// handleObj(user);

// handleObj({
//     username: "Tawde",
//     price: 14,
//     role: "student" // this won't execute or affect the code - because this is not in the function statement
// });

let arr = [11, 22, 33, 44, 55]

function getSecValue(arg){
    return arg[1]
}

// console.log(getSecValue(arr))
// console.log(getSecValue([11, 22, 33, 44]))   // both return same val as obj as array 

if(true){
    let a = 3 
    const b = 8
    var c = 9
}
// console.log(a)
// console.log(b)
// console.log(c)  // this should not work outside the scope ~{}~  because it create a boundary where let and const follow but var; thats make a problem for the scoping and so we not use var in codebase


// nested function and closure (need to know dom)

function one (){


function two(){
     const website = "Youtube";
     console.log(username)
}
two()
// console.log(website) // this is nested level 2 
}

// one()
let username  = "sodawater"
// if (true){

//     if(username === "sodawater"){
//         const website = "youtube"
//         console.log(`You're watching ${username} on the ${website}`);
        
//     }

//     // console.log(website)  // this can't be accessed here because it nesting end 

// }
// console.log(username)



// console.log(addOne(2));  // this is hosting : function can be used before declaration but when function holded in  variable it can't be accessed before declartion  \\ function vv below 
function addOne(num){
    return num + 1
}

// console.log(addOne(9));

let addTwo = function(num){
    return num + 2
}
// console.log(addTwo(5))


// 

let user3 = {
    username: "hitesh",
    price: 999,
    
    greet: function(){
        console.log(`${this.username}, welcome In the Universe`)
        console.log(this)
    }
}
user3.username  = "Shyam Sundar"
// user3.greet()
// console.log(this)


function chai(){
    let username = "Masala Chai"
    console.log(this.username);
    
}
// chai() // here: this refers to global|windown to the scope (one jump to the local scope)

let tea = () => {
    let username = "Masala chai"
    console.log(this)
}
// tea()


// Arrow function
// () => {}

let doSum = (num1, num2) => {
    return num1 + num2
}

// console.log(doSum(2, 3))

let makeSum = (a, b ) => ( a + b )  // this is implicit return; where function in single line and no need to write return word and still return the value

// console.log(makeSum(3, 4))

let impObj = () => ({username: "hitesh"})  // always use braces whenever returning an obj in implicit return 