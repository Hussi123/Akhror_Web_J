// javascript darslari 44 dars

/* --------- textContent ------------------------------- */

const title = document.getElementById('title')
title.textContent = 'New Text'
console.log(title.textContent);

const lists = document.querySelectorAll('.list-item')
console.log(lists);
lists.forEach(li => {
  li.textContent += ' DARSLARI'
})


/* --------- innerHTMl ------------------------------- */
title.innerHTML = '<i>new Text HTML</i>'

const names = ['Ahror', 'Sardor', 'Doniyor'];
const ol = document.querySelector('ol');

names.forEach(name => {
  ol.innerHTML += `<li>${name} </li>`
})



/*
innerHTML va tectContent ning farqi 
innerhtml ichida biz html codlarini yozishimiz 
mumkin

*/


/* --------- innerText ------------------------------- */

/*innerhtml va textcontentning deyarli farqi yo'q barcha hususiyatlari bir hil*/

const tectContent = title.textContent;
const innerText = title.innerText;
console.log(tectContent);
console.log(innerText);