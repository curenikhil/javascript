// destructuring objects

const course = {
    coursename: " js in hindi",
    price: "999",
    courseInstructor: " Hitesh",
}

 console.log(course.courseInstructor);

 // #1 way - destructure
const  {courseInstructor} = course
console.log(courseInstructor)

// #2 way - destructure
const  {courseInstructor: instructor} = course
console.log(instructor);



// API related

// this is not an object because this has no name so it is almsost treated as json
// {
//     "name": "hitesh",
//     "coursename": "Js in hindi",
//     "price": "freee",
// }


