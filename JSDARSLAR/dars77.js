// javascript darslari 77  dars

/* ---------------------- javascript Json data    ---------------------------------- */


const getTodos = (callback) => {

  const request = new XMLHttpRequest();

  request.addEventListener('readystatechange', () => {
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText);
      callback(undefined, data)
    }
    else if (request.readyState === 4) {
      callback('malumotni olishning imkoni bo\'lmadi', undefined)
    }
  })

  request.open('GET', 'https://jsonplaceholder.typecode.com/todos/');
  request.send();

}

getTodos((err, data) => {
  err ? console.log(err) : console.log(data);;
})



















/* ----------------------   ---------------------------------- */
/* ----------------------   ---------------------------------- */





/* ----------------------  ---------------------------------- */

/* ----------------------  ----------------------------------------*/


/* ---------------------  ----------------------------------------*/


/* -----------------------  ---------------------------------------- */





