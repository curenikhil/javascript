class User {
    constructor(username){
       this.username = username
    }
    logMe (){
        console.log(`Hey, ${this.username} just logged in `)
    }

}

class Teacher extends User {
    constructor(username, email, password) {
    
        super(username);
        this.email = email
        this.password = password
    }
    
    addCourse(){
        return `course added by ${this.username}`
    }
}

let chai = new Teacher ("chai", "chai@gmail.com", "124pass")
// console.log(chai)
console.log(chai.addCourse())
// chai.logMe()

// lets create a user not a  Teacher and check Does he holds the teacher property - teacher holds all the property of user by using word "extends"

// Lets check 
let userOne = new User("UserHitesh")
// console.log(userOne)
// userOne.logMe()

//lets check teacher prototype for user : result error 'user don't hold property of Teacher'
// console.log(userOne.addCourse())

