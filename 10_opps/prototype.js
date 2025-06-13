// all the below was related to new (keyword) named this file as prototyped because object and prototype is interconnected 

// Regular function has prototype, Arrow function doesn't have prototype

function multiplyBy5(num) {
  return num * 5;
}
multiplyBy5.power = 5;
// console.log(multiplyBy5(5))
// console.log(multiplyBy5.power)
// console.log(multiplyBy5.prototype)

function createUser(username, score) {
  this.username = username;
  this.score = score;
}

let userOne = new createUser("oolong tea", 700)
let userTwo = new createUser("Masala chai", 300)

console.log(userOne);
console.log(userTwo);

// lets create/check prototype
console.log(createUser.prototype)

// create
createUser.prototype.increment = function(){
    this.score = this.score + 1000
}

// call the created method with prototype
// userOne.increment()

console.log(userOne);

// lets create new prototype
createUser.prototype.printMe = function() {
    console.log(`The Price of  ${this.username.charAt(0).toUpperCase() + this.username.slice(1)} is ${this.score} `)
}

// lets call the printMe - one user2
userOne.printMe()