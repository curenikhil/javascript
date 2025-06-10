// IIFE 


// add braces on function and call by another another braces 
// ( function) ()  => iffe
(function chai()  {
  console.log(`DB CONNECTED`)

}) ();
// to end we need to terminate the line using  ; (line-break)


// unnamed iife
( (name) => {
  console.log(`DB CONNECTED TWO ${name}`)
})  ("Hitesh");  