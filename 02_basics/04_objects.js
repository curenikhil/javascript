const tinderUser = new Object()

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false




// console.log(tinderUser);


const regularUser = {
    email: "tata@bata.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname)
// another thing optional chaining - we learn in upcoming tutorials



// combine object

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}



const obj4 = {obj1, obj2}
// console.log(obj4);

const obj3 = Object.assign({}, obj1, obj2) // To Join multiple obj
// console.log(obj3);
// it is good practice to use "{}" for adding multiple objects


// using spread operator
// console.log({...obj1, ...obj2});

obj1.element = "ration"
console.log({...obj1, ...obj2});


// when data fetched from db
const users = [
    {
        id: 1,
        email: "h@gpay.com"
    },
    {
        sound: "hindi",
        round: "oval",
    },

];

users[1].email

console.log(tinderUser);

console.log(Object.keys(tinderUser)) // to get keys

console.log(Object.values(tinderUser)) // value

console.log(Object.entries(tinderUser)) // keys &value

console.log(tinderUser.hasOwnProperty('isLoggedIn')) // to check the propery available or not


//object is very long topic and it covered we in open topic we learn it bit by bit 