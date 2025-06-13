// modern way to define get Set

class User{
    constructor(email, password){
        this.email = email; // call here setter "email" method
        this.password = password; // call setter "password" method
    }
    get email(){
        return this._email.slice(1)
    }
    set email (value){
            this._email = value
    }
    get password(){
        return this._password.toUpperCase()  
    }
    set password(value){
        this._password = value
    }
}

const hitesh = new User("hitesh@gmail.com", "lowercase");
console.log(hitesh.email)