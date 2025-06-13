// Old syntax to define getter and setter

// first  make constructor "without class"


function User(email, password){
    this._email = email;
    this._password = password;


    Object.defineProperty(this, "email", {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this.email = value
        }
    } )

    Object.defineProperty(this, "password", {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this.password = value
        }
    } )


}

let chai = new User("chai@chaicode.com", "chaiKiChuski")
console.log(chai.email)
console.log(chai._email)
