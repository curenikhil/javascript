// dates stored in mili-seconds from the starting date of 1 jan 1970

let myDate = new Date()
console.log(myDate)
 
console.log(1, myDate.toString()); //Mon Mar 03 2025 12:30:16 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()) //Mon Mar 03 2025
console.log(myDate.toISOString()) //2025-03-03T07:00:16.207Z
console.log(myDate.toLocaleString()) //3/3/2025, 12:30:16 PM
console.log(myDate.toLocaleTimeString()) //12:30:16 PM
console.log(myDate.toTimeString()) //12:30:16 GMT+0530 (India Standard Time)
console.log(myDate.toUTCString()) //Mon, 03 Mar 2025 07:00:16 GMT

console.log(typeof myDate)


const newDate = new Date(2024, 0, 23) //Tue Jan 23 2024
console.log(newDate.toDateString())


// timestamp use - use to compare time to time

let myTimeStamp = Date.now()
console.log(myTimeStamp);

// console.log(myTimeStamp.getTime()) // invalid 
console.log(newDate.getTime()) // give timestamp of the that date in mili-seconds


let newCreatedDate = new Date()
console.log(newCreatedDate)
console.log(newCreatedDate.getMonth() + 1); // here 1 is added because index start with 0
console.log(newCreatedDate.getDay()); // sunday as 0 & monday as 1

newDate.toLocaleString('default', {
  weekday: "long",  
})