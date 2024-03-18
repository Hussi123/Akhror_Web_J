


const request = new XMLHttpRequest()   /*   new XMLHttpRequest()  - bu serverga malumot jo'natish yoki qabul qilish un object hisoblanadi*/


/* 1 method open methodi */

/* open methodi 2 ta narsani o'z ichiga oladi
   birinchisi qanaqa so'rov jo'natayotganimiz (get , post)
   ikkinchisi qayerga jo'natayotganimiz     
*/

// opend
request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');


// send
request.send()

/*  1 open tayyor
    2 send qilindi
    3 loading... yuklanyapti
    4 ma'lumot keldi
*/

request.addEventListener('readystatechange', () => {
  console.log(request, request.readyState);
  if (request.readyState === 4) {
    console.log(request.responseText);
  }
})

