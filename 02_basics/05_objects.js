// De-structuring objects

const course = {
    coursename: "Learn js in hindi",
    price: "999",
    courseInstructor: " Hitesh",
}

 console.log(course.courseInstructor);  // return Hitesh 

 // #1 way - destructure
const  {courseInstructor} = course  //Destructures the courseInstructor property directly from the object
console.log(courseInstructor)          // return Hitesh 

// #2 way - destructure
const  {courseInstructor: instructor} = course // Destructures courseInstructor directly from object and renames it to instructor.
console.log(instructor);               // return Hitesh 



// API related

// this is not an object because this has no name so it is almsost treated as json
// {
//     "name": "hitesh",
//     "coursename": "Js in hindi",
//     "price": "freee",
// }


