// javascript darslari 47 dars

/* --------- ClassList add va remove methodlari ------------------------------- */
const text = document.querySelector('.test1');
console.log(text.classList);
text.classList.add('muvofiqqiyatli')      /*class qo'shish*/
text.classList.remove('muvofiqqiyatli')   /*class olib tashlash*/


/* --------- ------------------------------- */
const paragraph = document.querySelectorAll('.mavzu-47 p');
console.log(paragraph);

paragraph.forEach(item => {
  if (item.textContent.includes('success')) item.classList.add('muvofiqqiyatli');
  if (item.textContent.includes('error')) item.classList.add('hato');
})












