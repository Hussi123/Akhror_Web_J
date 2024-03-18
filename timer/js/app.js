'use strict'

const timerDisplay = document.getElementById('timer__display');
let dispalayValue = timerDisplay.textContent;
let Timer;

function timer() {
  dispalayValue++;
  timerDisplay.textContent = dispalayValue;
  timerDisplay.style.color = 'green'
}

function recetInterval() {
  timerDisplay.textContent = 0;
  dispalayValue = 0
  timerDisplay.style.color = 'black';
}

let startInterval = function () {
  clearInterval(Timer)
  Timer = setInterval(timer, 1000)
}

function stopInterval() {
  clearInterval(Timer);
  timerDisplay.style.color = 'black'
}


document.addEventListener('click', (e) => {
  const element = e.target;
  if (element.id === "timer__btns-start") startInterval();
  if (element.id === "timer__btns-stop") stopInterval();
  if (element.id === "timer__btns-recet") recetInterval();
})
