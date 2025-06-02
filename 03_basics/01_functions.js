// Function example

function sayMyName() {
  console.log("H");
  console.log("i");
  console.log("t");
  console.log("e");
  console.log("s");
  console.log("H");
}
// sayMyName()

function addTwoNumbers(number1, number2) {
  console.log(number1 + number2);
}
// here we stored the function in a variable but the data-input is not stored

const addNum = addTwoNumbers(3, 5); // function stored in variable
// console.log("result: ", addNum);

function addTwoNumbers(number1, number2) {
  let result = number1 + number2;
  return result;
}

const result1 = addTwoNumbers(3, 5);
//   console.log("result: ", result1);

// another way
function addTwoNumbers(number1, number2) {
  let result = number1 + number2;
  return number1 + number2;
}
const result2 = addTwoNumbers(3, 5);
//   console.log("result: ", result2);

// !username means to change false to true
function loginUserMessage(username) {
  if (username === undefined) {
    return "please, enter a username";
  } else
  return `${username} just logged in`;
}

// console.log(loginUserMessage("hitesh"));
// console.log(loginUserMessage());   // here username is not defined 



//Add to cart - to calculate price because we don't know how many parameters will entered

function calculateCartPrice(...prices) {
  let total = 0 
  for (let element of prices) {
    total += element
  }
  return total
}
// console.log(calculateCartPrice(200, 400, 100, 800))

const user = {
  username: "hitesh",
  price: 199,
};

function handleObject(objectId) {
  console.log(
    `username is ${objectId.username} and price is ${objectId.price}`
  );
}
// handleObject(user)

// calling an function here
// handleObject({
//     username: "Altman",
//     price: 399
// })

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
  return getArray[1];
}

// console.log(returnSecondValue(myNewArray))
// console.log(returnSecondValue([200, 400, 100, 600]))

// Scope in function: function scope, global scope, local scope
