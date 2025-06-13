// object based get set 

const User = {
    _email: 'h@email.com',
    _password: "abc",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    },

    get password(){
        return this._password.toUpperCase()
    },

    set password(value){
        this._password = value
    }
}

// console.log(User.email)


// make truely private? 
class Users {
    // private field
    #email;

    constructor(email) {
        this.email = email; // triggers the setter
    }

    // Getter: expose a manipulated version of the email
    get email() {
        return this.#email.slice(1);  // example: hides first char
    }

    // Setter: set private email
    set email(value) {
        this.#email = value;
    }
}

// Create a user
const user1 = new Users("hitesh@gmail.com");

//Access the public getter
console.log(user1.email);  // Output: 'itesh@gmail.com'

// Can't access private field directly
// console.log(user1.#email);  //  SyntaxError