// for loop

for (let index = 1; index < 10; index++) {
    let element = index;
    // console.log(element)
    
};

for (let i = 1; i < 11; i++) {
    const element = i
    // console.log(element)
    
};


for (let i = 0; i <5; i++) {
    const element = i;
    // console.log(`outer ${element}`)
    for (let j = 0; j < 5; j++) {
        const element = j
        // console.log(`inner ${element}`)
    }
}


// print a table of 2 
// for (let i = 2; i <= 2; i++) {
//     const element = i ;
//     for (let j = 1; j <= 10; j++) {
//         const element = j
//         console.log(i*j)
//     }  
// }



let arr = ["flash", "fisher", "bigbot"]
for (let i = 0; i <= arr.length; i++) {
    const element = arr[i];
    // console.log(typeof element)
}


// break and continue
for (let i = 1; i <= 20; i++) {
 

    if ( i === 5){
        // console.log(`cutpoint`)
        break;
    }
    // console.log(i)
}
for (let i = 1; i <= 20; i++) {
    if ( i === 5){
        // console.log(`cutpoint 5j`)
        continue
    }
    // console.log(i)
}



// while loop 
let i = 2
while (i <=10){
//   console.log(i)
  i = i + 2
}


let myArray = [ "flash", "batman", "ratman"]
let k = 0
while(k < myArray.length){
    // console.log( `${myArray[k]}   `)
    k = k + 1
}

// do while loop

let score = 1;

do{
    // console.log(`score ${score}`);
    score++
} while( score <=10)


