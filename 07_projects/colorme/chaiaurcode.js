// generate random colors

const randomColor = function () {
    const hex = '0123456789ABCDEF';
  
    let color = '#';
  
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  
  console.log(randomColor());
  
  const start = document.querySelector('#start');
  const stop = document.querySelector('#stop');
  
  const body = document.querySelector('body');
  
  function changeMe() {
    // randomColor()
    body.style.backgroundColor = randomColor();
  }
  
  let intervalId = null;
  
  start.addEventListener('click', function () {
    if (intervalId !== null) {
      console.log('interval is going on');
      return;
    } else {
      intervalId = setInterval(changeMe, 1000);
    }
  
    stop.addEventListener('click', function () {
      clearInterval(intervalId);
      intervalId = null;
      console.log('interval cleared');
    });
  });
  