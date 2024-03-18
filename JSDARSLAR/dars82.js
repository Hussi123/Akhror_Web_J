// javascript darslari 82  dars

/* ---------------------- javascript Fetch API    ---------------------------------- */

/* ---------------------- old way = new XMLHttpRequest()  ---------------------------------- */

const API = 'https://jsonplaceholder.typecode.com/todos/';

const getTodos = (src) => {

  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
      if (request.readyState == 4 && request.status == 200) {
        const data = JSON.parse(request.responseText)
        resolve(data)
      } else if (request.readyState == 4) {
        reject('Nomalum hatolik')
      }
    })

    request.open('GET', src)
    request.send()
  })
}

/*

getTodos('./todos json/todos.json')
  .then((data) => {
    console.log(data);
    return getTodos('./todos json/todos1.json')
  })
  .then((data) => {
    console.log(data);
    return getTodos('./todos json/todos2.json')
  })
  .then((data) => {
    console.log(data);
    return getTodos(API);
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  })

*/

/* ---------------------- new way = fetch  ---------------------------------- */

fetch(API)
  .then((data) => {
    return data.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  })
