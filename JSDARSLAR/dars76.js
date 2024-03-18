// javascript darslari 76  dars

/* ----------------------  ---------------------------------- */
/* ---------------------- HTTPS Request  ---------------------------------- */

const getTodos = (callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener('readystatechange', () => {
    if (request.readyState === 4 && request.status === 200) {
      callback(undefined, request.responseText)
    } else if (request.readyState === 4) {
      callback("Ma'lumotni olishning iloji bo'lmadi", undefined)
    }
  })

  request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
  request.send()
}


getTodos((err, data) => {
  err ? console.log(err) : console.log(data);
})






/* ----------------------   ---------------------------------- */
