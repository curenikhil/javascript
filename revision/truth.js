// let email = "me@human.com"
// if(email) {
//     console.log(`have email`)
// } else{
//     console.log(`when conditon doesn't meet `)
// }


// this is a type of consideration as true or false ; empty string > false | string > true  | empty array > true | false > false | 
// refer truthy false chart

// let arr = []
// if ( arr.lenght === 0){
//     console.log(`Empty array`)
// }

// let obj = {
// }
// if(Object.keys(obj).length === 0) {
//     console.log( `object is empty  `)
// }


// Nullish coalescing operator 


// (??) : null undefined

let val1;
// val1 = 5 ?? 10
 val1 = null ?? 10
// console.log(val1) 


let val2 = undefined ?? 20   
// console.log( val2)

// used for the case when fetched data is empty (undefined || Null) so instead on that we use predifined value so code won't affect or show error 


// Terniary operator 
// condition ? true : false

let price = 100
price <= 80 ? console.log("less than the checkpoint") : console.log(`more than checkpoint 80`)

//  return code part:  meeting condition return true part ; not meeeting return false part 