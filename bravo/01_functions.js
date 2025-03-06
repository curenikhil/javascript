// Function example


function sayMyName() {
    console.log("H")
    console.log("i")
    console.log("t")
    console.log("e")
    console.log("s")
    console.log("H")
}
// sayMyName()

// function addTwoNumbers(number1, number2) {
//   console.log(number1 + number2);
// }

// const result = addTwoNumbers(3, 5)

// console.log("result: ", result);
// console is console here we stored the function in a a var but the data is not stored 


// function addTwoNumbers(number1, number2) {
//     let result = number1 + number2
//     return result
//   }

//   const result = addTwoNumbers(3, 5)
//   console.log("result: ", result);



// another way

function addTwoNumbers(number1, number2) {
    // let result = number1 + number2
    return number1 + number2
  }

  const result = addTwoNumbers(3, 5)
//   console.log("result: ", result);


// !username means to change false to true
function loginUserMessage (username){
    if (username === undefined){ 
  console.log("please, enter a username")
  return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage());

// situaton of add to cart - to calculate price becauset there we don't know how many parameters will entered


function calculateCartPrice(val1, val2, ...num1) {
 return num1
}

// console.log(calculateCartPrice(200, 400, 100))

const user = {
    "username": "hitesh",
    "price": 199,
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

handleObject({
 username: "sam",
 price: 399
});

const myNewArray = [ 200, 400, 100, 600];

function returnSecondValue(getArray){
    return getArray[1]
};

// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200, 400, 100, 600]))

// some types of scope in function: function scope, global scope, local scope

