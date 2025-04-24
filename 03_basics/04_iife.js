// immediately Invoked Function Expression(IIFE)
(function chai(){
    console.log(`DB CONNECTED`)
}) ();

// wrap the function inside "()" and execute it with ()
// this is used because of the pollution of the global scope - to avoid that we use it


((name) => {
 console.log(`DB CONNECTED TWO ${name}`)
}) ("hitesh");