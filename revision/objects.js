// constructor - which gives singleton object

// Object.create

// Object Literal methods 
const mySym =  Symbol("key1")

const user = {
    "full name": "Hitesh Chaudhary",
    location: "Jaipur",
    [mySym]: "mykey1",
    "age": 12,
    "lastLoginDay": "saturday",
    "email": "hitesh@gmail.com"

}

// console.log(user.email)
// console.log(user["full name"])
// console.log(typeof user[mySym]); // here the value is string 
// console.log(typeof mySym);   //  and but symbol is still used as sysbol; the datatype of value can  be anything

user.email = "ramayo@gmail.com"
// console.log(user["email"]);
// Object.freeze(user) // fully freeze the object
user.email = "chatgpt@gmail.com"
// console.log(user["email"]);
// console.log(user)

user.greeting  = function () {
    console.log(`hello js user`)
}

user.tweet = function (){
    console.log(`hello Mr. ${this["full name"]}`)
};

// console.log(user.greeting());
// console.log(user.tweet());


// constructor methods 
let tinderUser = new Object();
// let bitaUser = {}
tinderUser.id = "123abc";
tinderUser.name = "Sam";
tinderUser.isLoggedIn = undefined

// console.log(tinderUser)


let userBill = {
    "email": "userbill@gmail.com",
    "name": {
        "fullname": {
            firstname: "Hitesh",
            lastname: "chaudhary",
        }
    },
}

// console.log(userBill.name.fullname.firstname)


let obj1 = { 1: "a",  2: "b", 3: "C"};
let obj2 =  { 4: "d",  5: "e", 6: "f"};

let obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3);

let obj4 = {...obj1, ...obj2}
// console.log(obj4)

let mailUsers = [
    {
        username: "simpledev",
        id: 1
    },
    {
        username: "proudy",
        id: 2
    },
    {
        username: "smileminosa",
        id: 3
    }
]

// here first var is user which is a array and then objects nested which holds keys and values

// console.log(mailUsers[1].username)
// console.log(Object.keys(mailUsers[0]))
// console.log(Object.values(mailUsers[0]))
// console.log(Object.entries(mailUsers[0]))

// console.log(mailUsers[0].hasOwnProperty('username'));


// destructor

let course = {
    coursename: "js in hindi ",
    price: 999,
    courseTeacher: "Hitesh chaudhary"
}

let { courseTeacher: teacher} =  course
// console.log(teacher)


// React part - destructor often use in react 
// const navbar = ({company}) => {

// }
// navbar(company = "hitesh");



 // Below is json - json dosen't have variables (object with no variable is called json )

 {
    "name": "shubham",
    "email": "shubham@gmail.com",
    "price": 0
 }
 // 100% true 