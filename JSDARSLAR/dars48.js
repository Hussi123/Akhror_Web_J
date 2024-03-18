// javascript darslari 48 dars

/* --------- Parent children sibling elementlari      ------------------------------ */

// children 
const article = document.querySelector('article');
console.log(article.children); // article children bu yerda html collection 


/* HTML  collection bu hmtl collection bunda forech metodi ishlamaydi foreach metodini ishlatish uchun  -- Array.from() -- usulidan foydalanishimiz mumkin  */


Array.from(article.children).forEach((child) => {
  child.classList.add('article-child');
})

// parent element

const title = document.querySelector('.mavzu-48 h2');
console.log(title);

console.log(title.parentElement);
console.log(title.parentElement.parentElement);
console.log(title.nextElementSibling);            /*nextElementSibling -  elementdan bitta keyingi elementni tanlaydi  */  
console.log(title.previousElementSibling);        /*periviosElementSibling - elementdan bitta oldin oldingi elementni tanlaydi */


















