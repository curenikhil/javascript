//generate random colors

randomcolor = () => {
  let hex = "0123456789ABCDEF"
  let color = '#'
  for (let i = 0; i < 6; i++) {
     color += hex[Math.floor(Math.random() * 16)]
  // console.log(color)
  }
  // console.log(color)
  return color;
}
randomcolor()


let start = document.querySelector('#start');
let stop = document.querySelector('#stop')
let intervalId;


let p = document.createElement('p')
document.body.appendChild(p)
p.style.fontFamily = "verdana"
p.style.fontSize = "44px"
p.style.fontWeight = "900"

start.addEventListener('click', () => {
 if(intervalId === undefined){
   intervalId = setInterval(() => {
    let color = randomcolor()
     document.body.style.backgroundColor = color;
     p.innerHTML = `${color}`
    

   }, 1000);
 } else{
  console.log("alreday started")
 }
})

stop.addEventListener('click', ()   => {
  
    clearInterval(intervalId);
    intervalId = undefined
    console.log(`stoped`)
  
})



// double click on the body to change the color 
// let body = document.body;

// body.addEventListener('dblclick', () => {
//  if(intervalId === undefined){
//    intervalId = setInterval(() => {
//     let color = randomcolor()
//      document.body.style.backgroundColor = color;
//      p.innerHTML = `${color}`
//    }, 560);
//  } else{
//   console.log("stop")
//    clearInterval(intervalId);
//     intervalId = undefined
//     console.log(`stoped`)
//  }
// })









