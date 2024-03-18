// javascript darslari 53 dars

/* --------- Formalar       ------------------------------ */


const signupForm = document.querySelector('#signup-form');
// const username = document.querySelector('#username');
const message = document.querySelector('.message')
const rejEX = /^[a-z0-9]{4,16}$/;


/* preventDefault() - eventlarning default
  bo'lishini oldini olish bu bizga submit bo'lganda 
  refresh bo'lishini oldini oladi  
*/


signupForm.addEventListener('click', (e) => {
  e.preventDefault()
  // console.log(username.value);

  /*
   html elementiga id berilsa uning parent elementini tanlab
    uni pastdagi kabi islatisimiz mumkin bu yerda username inputning
    idisi 
  */
  console.log(signupForm.username.value);

  const inputVal = signupForm.username.value;

  if (rejEX.test(inputVal)) {
    message.textContent = 'malumot yuborildi'
  }else{
    message.textContent = 'inputning valuesi kamida 4 ta harfdan iborat bo\'lsin va kichchik lotin alifbosida bo\'lishi kerak '
  }
})


// JAVASCRIPT DARSLARI 54 DARS

/* --------- RegEX va regular expression   ------------------------------ */


const ism = 'Husniddin';

const regEX = /^[a-zA-Z0-9]{5,15}$/

const result = regEX.test(ism)
console.log(result);


//  javascript 56 dars 

/*  Live feedback  */

signupForm.username.addEventListener('keyup' , (e)=>{
  if (rejEX.test(e.target.value)) {
    signupForm.username.setAttribute('class', 'live_success');
  }
  else{
    signupForm.username.setAttribute('class', 'live_error')
  }
})




