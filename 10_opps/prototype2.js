//

let user = "Hitesh       ";
console.log(user.length);

// here we want to create a method so it comes with all strings like we don' want to use trim and still want to get the trulength

// let create construcotr first  because prototype emthod can e created and called too
function UserConstructor(username) {
  this.username = username;
}

// lets create truelength
// UserConstructor.prototype.trueLength = function () {
//    return this.username.trim().length
// }

// let pass argument
let userOne = new UserConstructor("Hitesh      ");
// console.log(userOne.trueLength())
// this method works for specific constructor only

// for all strings only  - globally
// // -- to work this it must be pasted in above the code as per my try if we execute trueLength() on top gives an error
String.prototype.trueLength = function () {
  return this.trim().length;
};
let userTwo = "Hitesh       "; //13 count of length
// console.log(userTwo.length)
// console.log(userTwo.trueLength())

// add protottypes for all globaly , even it is array, or string

// create hitesh

Object.prototype.hitesh = function () {
  console.log(`my created prototype`);
};

// lets check
let myHero = ["thor", "ironMan"];
// myHeros.hitesh()
// String.hitesh()

let myHeros = ["thor", "spiderman"];

let heroPower = {
  thor: {
    power: "hammer",
    getPower: function () {
      console.log(`${this.power}`);
    },
  },
  spiderman: {
    power: "web",
    getPower: function () {
      console.log(`${this.power}`);
    },
  },
};
// give spiderman power
heroPower.spiderman.getPower();

// heroPower.hitesh()



//  Inheritence 
 
let users = {
    username: "hitesh",
    email: "hitesh@chaicode.com"

}

let teacher = {
    makevideo: true
}

let teachingSupport = {
    status: false
}

let TAsupport = {
    makeAssignment: "JS Assignment",
    fulltime: true,
    __proto__: teachingSupport
}
// above TAsupport inherited the prototype of "teachingSupport"


// let teacher access all the proto of user
teacher.__proto__ = User