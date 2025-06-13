// // ES6

// class User {
//     constructor( username, email, password){
//        this.username = username;
//        this.email = email;
//        this.password = password;
//     }
        
       // a prototype
//     encryptPassword(){
//         return `${this.password}abc`
//     }
        
       // a prototype
//     changeUsername(){
//         return this.username.toLowerCase()
//     }
// }

// let chai = new User("HItesh", "hitesh@gmail.com", "124")

// // console.log(chai)
// console.log(chai.encryptPassword())
// console.log(chai.changeUsername())



// behind the scene  - a second method 
function user(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return this.username.toUpperCase()
}

let tea = new user("tea", "tea@gmail.com", "124")

console.log(tea)
console.log(tea.encryptPassword())
console.log(tea.changeUsername())