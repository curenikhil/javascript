// reduce 

let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let initialValue = 0
// let sum = array1.reduce((acc, currentvalue) => acc + currentvalue, initialValue);

// here the visualization of addition using reduce
let sum = array1.reduce((acc, currentvalue) => {
    console.log(`acc: ${acc} and currentvalue: ${currentvalue}`)
    return acc + currentvalue
}, initialValue);
console.log(sum);

// here it is eaisly used to calculate all the value


let shoppingCart = [
    { name: "Laptop", price: 1000 },
    { name: "Headphones", price: 150 },
    { name: "Keyboard", price: 80 },
    { name: "Mouse", price: 50 },
    { name: "Smartphone", price: 800 },
    { name: "Backpack", price: 60 }
];

let shoppingTotal = shoppingCart.reduce((acc, curval) =>  acc + curval.price, 0);
console.log(shoppingTotal)