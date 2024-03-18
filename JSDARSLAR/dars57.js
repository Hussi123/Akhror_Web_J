// javascript darslari 57 , 58  dars

/* ---------  ketDown keyUp keyPress   ------------------------------ */


// document.addEventListener('keydown' , (e)=>{
//   console.log(e.code);
//   console.log(e.key);
//   console.log(e.keyCode);
// })



// document.addEventListener('keyup', (e) => {
//   console.log(e.code);
//   console.log(e.key);
//   console.log(e.keyCode);
// })



const insert = document.querySelector('#insert')


window.addEventListener('keydown', (e) => {


  insert.innerHTML = `
  <div class="key" >
      ${(e.key == ' ') ? "spacee" : e.key}
    <small>event.key</small>
  </div >

  <div class="key" >
      ${e.keyCode}
    <small>event.keyCode</small>
  </div>

  <div class="key" >
      ${e.code}
    <small>event.code</small>
  </div>
  `
  console.log('event.key ' + e.key);
  console.log('event.keyCode ' + e.keyCode);
  console.log('event.code ' + e.code);
})












