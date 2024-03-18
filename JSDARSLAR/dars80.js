// javascript darslari 80  dars

/* ---------------------- javascript Promice chaining    ---------------------------------- */

/* ----------------------   ---------------------------------- */
const getTodos = (resourse) => {

  return new Promise((resolve, reject) => {

    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText)
        resolve(data);
      } else if (request.readyState === 4) {
        reject('Malumotni olishning iloji bolmadi')
      }
    })

    request.open('GET', resourse);
    // request.open('GET', 'https://jsonplaceholder.typecode.com/todos/');
    request.send();

  })
}

getTodos('./todos json/todos.json')
  .then((data) => {
    console.log(data)
    return getTodos('./todos json/todos1.json')
  })
  .then((data) => {
    console.log(data);
    return getTodos('./todos json/todos2.json')
  })
  .then(data =>{
    console.log(data);
  })
  .catch((err) => { console.log(err); })

/* ----------------------  promice  ---------------------------------- */

// const internet = true

// const getDate = (() => {
//   return new Promise((resolve, reject) => {
//     if (internet) {
//       resolve('hello resolve');
//     } else {
//       reject('hello reject');
//     }
//   })
// })

// getDate()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   ;

/* ----------------------   ---------------------------------- */
/* ----------------------   -----------------------------------*/
/* ----------------------   -----------------------------------*/
/* ----------------------   ---------------------------------- */