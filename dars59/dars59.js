// javascript darslari 59 Random gradient dars

/* ---------------------- javascript   ---------------------------------- */

/* ----------------------   ---------------------------------- */
const body = document.querySelector('body');
const container = document.querySelector('.container');
const colorText = document.querySelector('.color-text');

const value = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

/* ---------------------- random gradient function   ---------------------------------- */

function getGradient() {
  let color = "#";

  for (let i = 0; i < 6; i++) {
    const randomNumber = Math.trunc(Math.random() * value.length);
    color += value[randomNumber];
  }

  return color;
};

/* ---------------------- set gradient to body ---------------------------------- */

function setGradient() {
  const color1 = getGradient();
  const color2 = getGradient();

  const deg = Math.trunc(Math.random() * 360);

  const bgColor = `linear-gradient(
    ${deg}deg,
    ${color1},
    ${color2}
    )
    `
  body.style.background = bgColor;
  colorText.textContent = bgColor;
};

container.addEventListener('click', setGradient);


/* ----------------------  ----------------------------------------*/
/* ---------------------  ----------------------------------------*/
/* -----------------------  ---------------------------------------- */





