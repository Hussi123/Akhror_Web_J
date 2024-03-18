// javascript darslari 45 dars

/* --------- getAtribut ------------------------------- */
const link = document.querySelector('a');

console.log(link.getAttribute('href'));

/*getAtribut bu elementning atributini olib beradi*/

/* --------- setAtribut ------------------------------- */
link.setAttribute('href' , 'https://www.Yandex.ru')
link.textContent = 'Go To Yandex Main Page'



// =======================================================

const text = document.querySelector('p');

console.log(text.getAttribute('class'));

text.setAttribute('class' , 'success')
text.setAttribute('style' , 'color : red')