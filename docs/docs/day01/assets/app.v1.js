const btn = document.querySelector('#modeBtn');

btn.addEventListener('click', (e)=> {
  const changeColor = document.querySelector('.container');
  // const body = document.body;
  if(e.target.innerHTML === '🌞') {
    changeColor.style.background = 'black';
    changeColor.style.color = 'white';
    e.target.innerHTML = '🌜';
  } else {
    changeColor.style.background = 'white';
    changeColor.style.color = 'black';
    e.target.innerHTML = '🌞';
  }
});
