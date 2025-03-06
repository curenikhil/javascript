// Arrow
// use of "this" - refer current context
const user = {
    username: "Hitesh",
    price: 199,

    welcomeMessage: function(){
    console.log(`${this.username} , welcome to website`);
    console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this); 

function chai() {
    console.log(this)
}
// this work in object not in  function
// chai()


const garamChai =  () => {
    let username = "Hitesh"
    console.log(this)

}
garamChai ()

//  below is an implicit return
const addTwo = (num1, num2) => {
    return num1 + num2
}

// if we use "{}" we have to write return keyword if not then below another example

const addThree = (num1, num2) => num1 + num2;  // must be in single line
const addFour = (num1, num2) => (num1 + num2) 

console.log(addTwo(3, 4))
console.log(addThree(3, 4))
console.log(addFour(3, 4))


const addObject = (num1, num2) => ({username: "Hitesh", price: 199,})

console.log(addObject(3, 4))


// const myArray = [ 2, 3, 4, 5, 6, 7]
// myArray.forEach()