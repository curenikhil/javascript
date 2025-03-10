// iterations known as loops

for (let index = 0; index <= 1; index++) {
    const element = index;
    console.log(element);

};

// for (let i = 0; i <= 10; i++) {

//     for (let j = 0; j < 10; j++) {
//      console.log(`inner loop ${j} and outer loop ${i}`)
        
//     }
//     console.log(`outer loop ${i}`)

// }

let myArray = ["falsh", "batman", "superman"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element)
}

// KEYWORD: break & continue

// for (let index = 1; index <= 20; index++) {
//     // const element = index; // use nor not no worry
//     if (index == 5) {
//         console.log(`detected 5`)
//         break;
//     }
//     console.log(`the value of i is ${index}`)
    
// }

// on use of break it step-out the block and and move to global and print till the if statement

for (let index = 1; index <= 20; index++) {
    // const element = index; // use nor not no worry
    if (index == 5) {
        console.log(`detected 5`)
        continue;
    }
    console.log(`the value of i is ${index}`)
    
} 
// here 5 is not printed but still continued till last index