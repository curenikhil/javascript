function SetUsername (username) {
     // complex DB call and matching 
     this.username = username
}

// here: SetUsername is funcction is called by create user whenever new user is created using the below constructor
function createUser (para1, para2, para3) {
    SetUsername.call(this, para1)
    this.email = para2;
    this.password = para3
}

let user1 = new createUser("hitesh", "email@email.com", "admin124")

console.log(user1)