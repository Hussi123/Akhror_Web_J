'use strict'

const singupForm = document.querySelector('#singupform');
const inputForm = document.querySelector('#inputForm');
const buttonForm = document.querySelector('#buttonForm');
let formAlertMessage = document.querySelector('.message');

let regex = /^[a-zA-Z0-9]{3,15}$/

/* --------- regulsr expression ------------------- */

/*
regular expressionlar har doim  slash daraja(/^) belgisi bilan boshlanadi va dollar slash($/) bilan tugaydi
to'rtburchakli qavs ichida [] qanday turdagi katta yoki kichik harflar yoki sonlar qatnashishi yoki qatnashmasligini belgilaymiz
gulli jingalak qavs ichida {} bu qavsda length yani passwordning uzinligini belgilaymiz

// const regEX = /^[a-zA-Z0-9]{5,15}$/

*/


inputForm.addEventListener('keyup', (e) => {

  if (regex.test(e.target.value)) {
    inputForm.setAttribute('class', 'success');
    // inputForm.classList.add('success');    
    // inputForm.classList.remove('error')
  } else {
    inputForm.setAttribute('class', 'error')
    // inputForm.classList.remove('success')
    // inputForm.classList.add('error');
  }
})


singupForm.addEventListener('submit', (e) => {
  e.preventDefault();

  if (regex.test(inputForm.value)) {
    formAlertMessage.textContent = `Malumot yuborildi`
    formAlertMessage.style.padding = '5px'
    setTimeout(() => {
      formAlertMessage.textContent = ''
      formAlertMessage.style.padding = '0'
    }, 5000)
  } else {
    formAlertMessage.textContent = `Siz yuborayotgan messagning uzunligi 3 dan yuqori va 15 dan kam bo'lishi va har xil ishoralardan holi bo'lishi zarur`
    formAlertMessage.style.padding = '5px'
    setTimeout(() => {
      formAlertMessage.textContent = ''
      formAlertMessage.style.padding = '0'
    }, 5000)
  }
})















// let inputValue = inputForm.value

// inputForm.addEventListener('keyup', (e) => {
//   e.preventDefault()

//   if (regex.test(inputValue)){
//     console.log('success');
//   }else{
//     console.log('error');
//   }
//   console.log(inputForm.value , e);
// })





