// javascript darslari 71  72  73 74 75  dars

/* ---------------------- Synchronous && Asynchronous javascript   ---------------------------------- */

/* ---------------------- WeB API   ---------------------------------- */

/* ---------------------- Ajax && Api javascript   ---------------------------------- */

console.log(1);
console.log(2);

setTimeout(() => {
  console.log('Hello javascript');
}, 5000)

console.log(3);
console.log(4);

/* ---------------------- HTTPS Request  ---------------------------------- */




const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
  console.log(request, request.readyState);
  if (request.readyState === 4 && request.status === 200) {
    console.log(request, request.responseText);
  } else if (request.readyState === 4) {
    console.log('Malumotni olishning iloji bo\'lmadi');
  }
})

request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
request.send()






/* ----------------------   ---------------------------------- */
