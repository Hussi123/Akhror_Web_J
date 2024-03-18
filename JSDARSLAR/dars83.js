// javascript darslari 83 dars

/* ---------------------- javascript Async Await    ---------------------------------- */

/* ---------------------- old way = new XMLHttpRequest()  ---------------------------------- */

const API = 'https://jsonplaceholder.typecode.com/todos/';
const src = 'todos json/todos.json';
const src1 = 'todos json/todos1.json';
const src2 = 'todos json/todos2.json';

/*
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

/*

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

*/

/* ---------------------- Async await  ---------------------------------- */

const getData = async (resurse) => {
  const request = await fetch(resurse);
  const data = await request.json();
  console.log(data);
}

getData(src);
getData(src1);
getData(src2);
getData(API);










