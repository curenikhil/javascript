class User {
    constructor(username) {
        this.username = username;
    }

    // here prottotype
    logMe(){
        console.log(`${this.username} loggedIn`)
    }
    
    // here prototype that we don't want get inherited by any obj that is created from User 

    static createId () {
        return 123
    }
}
let UserOne = new User("hitesh")
// createId won't work if static is used before this method where it is declared
// console.log(UserOne.createId()) 

class Teacher extends User {
    constructor(username, email){
    super(username);
    this.email = email
    }
}

let iphone = new Teacher("iphone", "me@iphone.com")
iphone.logMe()
console.log(iphone.username)


// lets check Teacher can use createId or not  : Answer "No, it can't use "
// console.log(iphone.createId())

// Question how someone can use when static is defined for any method() 